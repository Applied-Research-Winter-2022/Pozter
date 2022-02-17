-- test example this shouldn't be all that we have for columns
create table if not exists billboards (
billboard_id uuid default uuid_generate_v1mc() primary key not null,
name_location varchar(255),
screens integer,
created_at timestamp(6) with time zone default Now() not null,
updated_at timestamp(6) with time zone
);
