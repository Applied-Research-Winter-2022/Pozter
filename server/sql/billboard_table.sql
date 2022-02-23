-- This has been ran already.
create table if not exists billboards (
id uuid default uuid_generate_v1mc() primary key not null,
billboards_name text,
owner_id uuid,
created_at timestamp(6) with time zone default Now() not null,
updated_at timestamp(6) with time zone,
constraint fk_owner_id
	foreign key(owner_id)
		references owners(id)
);