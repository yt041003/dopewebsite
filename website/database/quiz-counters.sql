-- Independent counts, using the existing server-only signing secret.
create table dope_private.quiz_counts (slug text primary key check(slug in ('love-personality','personality-16')), baseline bigint not null default 3125, completions bigint not null default 0 check(completions>=0));
create table dope_private.quiz_visitors (slug text not null references dope_private.quiz_counts(slug), visitor_hash text not null check(visitor_hash ~ '^[a-f0-9]{64}$'), completed_at timestamptz not null default now(), primary key(slug,visitor_hash));
alter table dope_private.quiz_counts enable row level security;
alter table dope_private.quiz_visitors enable row level security;
revoke all on dope_private.quiz_counts,dope_private.quiz_visitors from public,anon,authenticated;
insert into dope_private.quiz_counts(slug) values('love-personality'),('personality-16');
create function public.twynzo_get_count(p_slug text) returns jsonb language sql security definer set search_path='' as $$ select jsonb_build_object('total',baseline+completions) from dope_private.quiz_counts where slug=p_slug $$;
create function public.twynzo_complete(p_slug text,p_visitor text,p_secret text) returns jsonb language plpgsql security definer set search_path='' as $$
declare inserted integer; total_count bigint;
begin
 if p_secret is null or length(p_secret)<32 or not exists(select 1 from dope_private.counter where id=true and secret_hash=encode(sha256(convert_to(p_secret,'UTF8')),'hex')) then raise exception 'Forbidden' using errcode='42501'; end if;
 if p_slug is null or p_slug not in ('love-personality','personality-16') or p_visitor is null or p_visitor !~ '^[a-f0-9]{64}$' then raise exception 'Invalid input'; end if;
 perform 1 from dope_private.quiz_counts where slug=p_slug for update;
 insert into dope_private.quiz_visitors(slug,visitor_hash) values(p_slug,p_visitor) on conflict do nothing;
 get diagnostics inserted = row_count;
 if inserted=1 then update dope_private.quiz_counts set completions=completions+1 where slug=p_slug; end if;
 select baseline+completions into total_count from dope_private.quiz_counts where slug=p_slug;
 return jsonb_build_object('total',total_count,'added',inserted=1);
end $$;
revoke all on function public.twynzo_get_count(text),public.twynzo_complete(text,text,text) from public;
grant execute on function public.twynzo_get_count(text),public.twynzo_complete(text,text,text) to anon,authenticated;
