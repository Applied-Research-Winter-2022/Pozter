-- This has been ran already.
create table if not exists user_screens (
id uuid default uuid_generate_v1mc() primary key not null,
screen_canvas_id uuid,
user_billboard_id uuid,
user_screen_name text,
description text,
config jsonb,
created_at timestamp(6) with time zone default Now() not null,
updated_at timestamp(6) with time zone,
constraint fk_screen_canvas_id
	foreign key(screen_canvas_id)
		references screen_canvases(id),
constraint fk_user_billboard_id
	foreign key(user_billboard_id)
		references user_billboards(id)
);