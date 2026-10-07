-- Twynzo anonymous aggregate result counters.
-- This starts a NEW, honest result-distribution sample at deployment time.
-- The historical 3,125 display baseline is intentionally excluded because old answers/results were never stored.
-- No answer sequence, result-to-visitor mapping, IP address, name or email is stored here.

create table if not exists dope_private.result_counts (
  slug text not null check (slug in ('dope','love-personality','personality-16')),
  result_code text not null check (length(result_code) between 1 and 16),
  completions bigint not null default 0 check (completions >= 0),
  first_recorded_at timestamptz not null default now(),
  last_recorded_at timestamptz not null default now(),
  primary key (slug,result_code)
);

alter table dope_private.result_counts enable row level security;
revoke all on dope_private.result_counts from public,anon,authenticated;

create or replace function public.dope_complete_v2(
  p_visitor text,
  p_secret text,
  p_result text
) returns jsonb
language plpgsql
security definer
set search_path=''
as $$
declare
  inserted integer;
  total_count bigint;
  allowed text[] := array[
    'D','O','P','E',
    'D+O','D+P','D+E','O+P','O+E','P+E',
    'D+O+P','D+O+E','D+P+E','O+P+E','D+O+P+E'
  ];
begin
  if p_secret is null
     or length(p_secret) < 32
     or not exists (
       select 1
       from dope_private.counter
       where id=true
         and secret_hash=encode(sha256(convert_to(p_secret,'UTF8')),'hex')
     )
  then
    raise exception 'Forbidden' using errcode='42501';
  end if;

  if p_visitor is null or p_visitor !~ '^[a-f0-9]{64}$' then
    raise exception 'Invalid visitor';
  end if;
  if p_result is null or not (p_result = any(allowed)) then
    raise exception 'Invalid result';
  end if;

  perform 1 from dope_private.counter where id=true for update;

  insert into dope_private.visitors(visitor_hash)
  values(p_visitor)
  on conflict do nothing;
  get diagnostics inserted = row_count;

  if inserted=1 then
    update dope_private.counter
    set completions=completions+1
    where id=true;

    insert into dope_private.result_counts(slug,result_code,completions)
    values('dope',p_result,1)
    on conflict(slug,result_code) do update
      set completions=dope_private.result_counts.completions+1,
          last_recorded_at=now();
  end if;

  select baseline+completions
  into total_count
  from dope_private.counter
  where id=true;

  return jsonb_build_object('total',total_count,'added',inserted=1);
end
$$;

create or replace function public.twynzo_complete_v2(
  p_slug text,
  p_visitor text,
  p_secret text,
  p_result text
) returns jsonb
language plpgsql
security definer
set search_path=''
as $$
declare
  inserted integer;
  total_count bigint;
  love_allowed text[] := array[
    'W','C','A','G',
    'W+C','W+A','W+G','C+A','C+G','A+G',
    'W+C+A','W+C+G','W+A+G','C+A+G','W+C+A+G'
  ];
begin
  if p_secret is null
     or length(p_secret) < 32
     or not exists (
       select 1
       from dope_private.counter
       where id=true
         and secret_hash=encode(sha256(convert_to(p_secret,'UTF8')),'hex')
     )
  then
    raise exception 'Forbidden' using errcode='42501';
  end if;

  if p_slug is null or p_slug not in ('love-personality','personality-16')
     or p_visitor is null or p_visitor !~ '^[a-f0-9]{64}$'
  then
    raise exception 'Invalid input';
  end if;

  if (p_slug='love-personality' and (p_result is null or not (p_result = any(love_allowed))))
     or (p_slug='personality-16' and (p_result is null or p_result !~ '^[EIX][SNX][TFX][JPX]$'))
  then
    raise exception 'Invalid result';
  end if;

  perform 1 from dope_private.quiz_counts where slug=p_slug for update;

  insert into dope_private.quiz_visitors(slug,visitor_hash)
  values(p_slug,p_visitor)
  on conflict do nothing;
  get diagnostics inserted = row_count;

  if inserted=1 then
    update dope_private.quiz_counts
    set completions=completions+1
    where slug=p_slug;

    insert into dope_private.result_counts(slug,result_code,completions)
    values(p_slug,p_result,1)
    on conflict(slug,result_code) do update
      set completions=dope_private.result_counts.completions+1,
          last_recorded_at=now();
  end if;

  select baseline+completions
  into total_count
  from dope_private.quiz_counts
  where slug=p_slug;

  return jsonb_build_object('total',total_count,'added',inserted=1);
end
$$;

create or replace function public.twynzo_result_aggregates()
returns table(
  slug text,
  result_code text,
  completions bigint,
  sample bigint,
  recorded_from date
)
language sql
security definer
set search_path=''
stable
as $$
  select
    r.slug,
    r.result_code,
    r.completions,
    sum(r.completions) over(partition by r.slug)::bigint as sample,
    date '2026-10-08' as recorded_from
  from dope_private.result_counts r
  where r.completions > 0
  order by r.slug, r.completions desc, r.result_code
$$;

revoke execute on function public.dope_complete_v2(text,text,text) from public,anon,authenticated;
revoke execute on function public.twynzo_complete_v2(text,text,text,text) from public,anon,authenticated;
revoke execute on function public.twynzo_result_aggregates() from public,anon,authenticated;

-- The browser never calls these RPCs directly. Next.js server routes use the project's
-- publishable key and supply the separate server-only COUNTER_SECRET for writes.
grant execute on function public.dope_complete_v2(text,text,text) to anon,authenticated;
grant execute on function public.twynzo_complete_v2(text,text,text,text) to anon,authenticated;

-- Aggregate-only rows contain no visitor identifiers or answers and are safe to read.
grant execute on function public.twynzo_result_aggregates() to anon,authenticated;
