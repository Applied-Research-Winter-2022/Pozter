-- This has been ran already.
create table if not exists owners (
id uuid default uuid_generate_v1mc() primary key not null,
owner_name text,
created_at timestamp(6) with time zone default Now() not null,
updated_at timestamp(6) with time zone
);