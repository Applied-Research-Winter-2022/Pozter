-- This has been ran already.
create table if not exists users (
id uuid default uuid_generate_v1mc() primary key not null,
user_name text,
organization text,
created_at timestamp(6) with time zone default Now() not null,
updated_at timestamp(6) with time zone
);