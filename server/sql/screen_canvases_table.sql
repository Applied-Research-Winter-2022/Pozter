-- This has been ran already.
create table if not exists screen_canvases (
id uuid default uuid_generate_v1mc() primary key not null,
billboard_id uuid,
screen_canvases_name text,
config jsonb,
created_at timestamp(6) with time zone default Now() not null,
updated_at timestamp(6) with time zone,
constraint fk_billboard_id
	foreign key(billboard_id)
		references billboards(id)
);
