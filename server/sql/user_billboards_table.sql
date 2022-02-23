-- This has been ran already.
create table if not exists user_billboards (
id uuid default uuid_generate_v1mc() primary key not null,
user_id uuid,
user_billboard_name text,
description text,
socket_url text,
config jsonb,
created_at timestamp(6) with time zone default Now() not null,
updated_at timestamp(6) with time zone,
constraint fk_user_id
	foreign key(user_id)
		references users(id)
);
