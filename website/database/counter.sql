-- Apply to the dedicated DOPE project. Only keyed RPCs can write; no answer data is stored.
create schema if not exists dope_private;
revoke all on schema dope_private from public,anon,authenticated;
create table dope_private.counter (id boolean primary key default true check(id), baseline bigint not null default 3125 check(baseline=3125), completions bigint not null default 0 check(completions>=0), secret_hash text not null);
create table dope_private.visitors (visitor_hash text primary key check(visitor_hash ~ '^[a-f0-9]{64}$'), completed_at timestamptz not null default now());
alter table dope_private.counter enable row level security;
alter table dope_private.visitors enable row level security;
revoke all on dope_private.counter,dope_private.visitors from public,anon,authenticated;
-- Provision one row separately with SHA256(COUNTER_SECRET), never the secret itself.
create or replace function public.dope_get_count() returns jsonb language sql security definer set search_path='' as $$ select jsonb_build_object('total',baseline+completions) from dope_private.counter where id=true $$;
create or replace function public.dope_complete(p_visitor text,p_secret text) returns jsonb language plpgsql security definer set search_path='' as $$
declare inserted integer; total_count bigint;
begin
 if p_secret is null or length(p_secret)<32 or not exists(select 1 from dope_private.counter where id=true and secret_hash=encode(sha256(convert_to(p_secret,'UTF8')),'hex')) then raise exception 'Forbidden' using errcode='42501'; end if;
 if p_visitor is null or p_visitor !~ '^[a-f0-9]{64}$' then raise exception 'Invalid visitor'; end if;
 -- Serialize read/update with the same row lock for consistent totals under concurrency.
 perform 1 from dope_private.counter where id=true for update;
 insert into dope_private.visitors(visitor_hash) values(p_visitor) on conflict do nothing;
 get diagnostics inserted = row_count;
 if inserted=1 then update dope_private.counter set completions=completions+1 where id=true; end if;
 select baseline+completions into total_count from dope_private.counter where id=true;
 return jsonb_build_object('total',total_count,'added',inserted=1);
end $$;
revoke all on function public.dope_get_count() from public;
revoke all on function public.dope_complete(text,text) from public;
grant execute on function public.dope_get_count() to anon,authenticated;
grant execute on function public.dope_complete(text,text) to anon,authenticated;
