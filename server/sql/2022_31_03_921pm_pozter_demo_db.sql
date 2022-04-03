-- This is top down order of how to rebuild the whole schema for a different db if needed.
CREATE EXTENSION "uuid-ossp";

create table if not exists owners (
id uuid default uuid_generate_v1mc() primary key not null,
owner_name text,
created_at timestamp(6) with time zone default Now() not null,
updated_at timestamp(6) with time zone
);

create table if not exists billboards (
id uuid default uuid_generate_v1mc() primary key not null,
billboard_name text,
venue text,
owner_id uuid,
created_at timestamp(6) with time zone default Now() not null,
updated_at timestamp(6) with time zone,
constraint fk_owner_id
	foreign key(owner_id)
		references owners(id)
);

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

create table if not exists users (
id uuid default uuid_generate_v1mc() primary key not null,
user_name text,
organization text,
created_at timestamp(6) with time zone default Now() not null,
updated_at timestamp(6) with time zone
);

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

create table if not exists social_media_contents (
id uuid default uuid_generate_v1mc() primary key not null,
user_billboard_id uuid,
social_media_content_name text,
description text,
config jsonb, 
created_at timestamp(6) with time zone default Now() not null,
updated_at timestamp(6) with time zone,
constraint fk_user_billboard_id
	foreign key(user_billboard_id)
		references user_billboards(id)
);

create table if not exists social_media_posts (
id uuid default uuid_generate_v1mc() primary key not null,
social_media_content_id uuid,
content jsonb,
created_at timestamp(6) with time zone default Now() not null,
updated_at timestamp(6) with time zone,
constraint fk_social_media_content_id
	foreign key(social_media_content_id)
		references social_media_contents(id)
);

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

CREATE OR REPLACE FUNCTION updated_at()
RETURNS TRIGGER AS $$
BEGIN
   NEW.updated_at := Now(); 
   RETURN NEW;
END;
$$ language 'plpgsql';

-- For each table that contains update_at (should be all of them)
CREATE TRIGGER trg_update_tbl_owners BEFORE UPDATE
ON owners FOR EACH ROW EXECUTE PROCEDURE 
updated_at();

CREATE TRIGGER trg_update_tbl_billboards BEFORE UPDATE
ON billboards FOR EACH ROW EXECUTE PROCEDURE 
updated_at();

CREATE TRIGGER trg_update_tbl_screen_canvases BEFORE UPDATE
ON screen_canvases FOR EACH ROW EXECUTE PROCEDURE 
updated_at();

CREATE TRIGGER trg_update_tbl_users BEFORE UPDATE
ON users FOR EACH ROW EXECUTE PROCEDURE 
updated_at();

CREATE TRIGGER trg_update_tbl_user_billboards BEFORE UPDATE
ON user_billboards FOR EACH ROW EXECUTE PROCEDURE 
updated_at();

CREATE TRIGGER trg_update_tbl_spcial_media_contents BEFORE UPDATE
ON social_media_contents FOR EACH ROW EXECUTE PROCEDURE 
updated_at();

CREATE TRIGGER trg_update_tbl_sociak_media_posts BEFORE UPDATE
ON social_media_posts FOR EACH ROW EXECUTE PROCEDURE 
updated_at();

CREATE TRIGGER trg_update_tbl_user_screens BEFORE UPDATE
ON user_screens FOR EACH ROW EXECUTE PROCEDURE 
updated_at();

INSERT INTO public.owners (id,owner_name,created_at,updated_at) VALUES
	 ('698655c2-9461-11ec-abf7-ff4ef606fab1'::uuid,'CF','2022-02-22 23:31:04.478709-05',NULL),
	 ('4bd265d8-9462-11ec-abf7-971c4b391033'::uuid,'Atrium on Bay (AOB)','2022-02-22 23:37:24.142637-05',NULL);
	
INSERT INTO public.billboards (id,billboard_name,owner_id,created_at,updated_at,venue) VALUES
	 ('814f8704-9462-11ec-abf7-9f7d873f0076'::uuid,'Billboard Sample','698655c2-9461-11ec-abf7-ff4ef606fab1'::uuid,'2022-02-22 23:38:53.881631-05','2022-03-24 19:07:32.67989-04','Greater Toronto Digital');
	 
INSERT INTO public.screen_canvases (id,billboard_id,screen_canvases_name,config,created_at,updated_at) VALUES
	 ('ce24f656-9465-11ec-abf7-bf7c0434b03a'::uuid,'814f8704-9462-11ec-abf7-9f7d873f0076'::uuid,'Single Screen Canvas','{"canvases": [{"name": "main", "image": true, "video": true, "width": "2000px", "height": "3000px"}], "social_media_overlay": {"type": "twitter", "width": "100%", "height": "", "translateX": "0%", "translateY": "55%"}}','2022-02-23 00:02:31.277573-05','2022-03-24 20:59:23.711069-04');
	
INSERT INTO public.users (id,user_name,organization,created_at,updated_at) VALUES
	 ('35a27f4e-9f40-11ec-bbaa-bba14276ac27'::uuid,'User 1','Organization 1','2022-03-08 19:31:06.819953-05',NULL);

INSERT INTO public.user_billboards (id,user_id,user_billboard_name,description,socket_url,config,created_at,updated_at) VALUES
	 ('d12cb650-9f40-11ec-bbaa-6fe27c042acc'::uuid,'35a27f4e-9f40-11ec-bbaa-bba14276ac27'::uuid,'Placeholder User Billboard','Created for testing','http://localhost:8000','{}','2022-03-08 19:35:27.773136-05','2022-03-24 22:31:32.502325-04'),
	 ('35a27f4e-9f40-11ec-bbaa-bba14276ac27'::uuid,NULL,'no name','some description','http://localhost:8000',NULL,'2022-03-23 23:26:33.073583-04','2022-03-24 22:31:32.540848-04'),
	 ('f6586fa2-abb4-11ec-9d14-0f9b52a38323'::uuid,'35a27f4e-9f40-11ec-bbaa-bba14276ac27'::uuid,'My Billboard','Made by Me!','http://localhost:8000','{}','2022-03-24 16:57:05.704307-04','2022-03-24 22:31:32.586237-04'),
	 ('808b27e2-abaf-11ec-8959-5fcd85608b96'::uuid,'35a27f4e-9f40-11ec-bbaa-bba14276ac27'::uuid,'My Billboard','Made by Me!','http://localhost:8000','{}','2022-03-24 16:18:00.586342-04','2022-03-24 22:31:32.626316-04');
	
INSERT INTO public.social_media_contents (id,user_billboard_id,social_media_content_name,description,config,created_at,updated_at) VALUES
	 ('8920a25e-aba7-11ec-b23c-2b25f84debc2'::uuid,'d12cb650-9f40-11ec-bbaa-6fe27c042acc'::uuid,'Twitter Content for my Event','We''re getting a lot of engagement from a guy named "@tom"!?','{"hashtag": "#pirates"}','2022-03-24 15:20:59.013913-04','2022-03-24 18:55:11.299849-04');	
	
INSERT INTO public.social_media_posts (id,social_media_content_id,"content",created_at,updated_at) VALUES
	 ('bb1e3dda-abab-11ec-a5b6-db2033d3371a'::uuid,'8920a25e-aba7-11ec-b23c-2b25f84debc2'::uuid,'{"type": "twitter", "user": "@tom", "content": "ahoy there 6 #pirates"}','2022-03-24 15:51:00.871305-04','2022-03-24 18:56:16.250124-04'),
	 ('ca0305aa-abac-11ec-a5b6-bb25632180e2'::uuid,'8920a25e-aba7-11ec-b23c-2b25f84debc2'::uuid,'{"type": "twitter", "user": "@tom", "content": "ahoy there 7 #pirates"}','2022-03-24 15:58:35.356083-04','2022-03-24 18:56:16.290018-04'),
	 ('d3ccd9ea-abb5-11ec-afc4-db962f019e7b'::uuid,'8920a25e-aba7-11ec-b23c-2b25f84debc2'::uuid,'{"type": "twitter", "user": "@tom", "content": "ahoy there 8 #pirates"}','2022-03-24 17:03:17.248357-04','2022-03-24 18:56:16.333511-04'),
	 ('a4937250-aba7-11ec-9ff4-836206ed6059'::uuid,'8920a25e-aba7-11ec-b23c-2b25f84debc2'::uuid,'{"type": "twitter", "user": "@tom", "content": "ahoy there #pirates"}','2022-03-24 15:21:45.065538-04','2022-03-24 18:56:16.372855-04'),
	 ('a49b9840-aba7-11ec-9ff4-9fd109bbc394'::uuid,'8920a25e-aba7-11ec-b23c-2b25f84debc2'::uuid,'{"type": "twitter", "user": "@tom", "content": "ahoy there 2 #pirates"}','2022-03-24 15:21:45.118959-04','2022-03-24 18:56:16.41173-04'),
	 ('a4bcd834-aba7-11ec-9ff4-cb2a994eff7d'::uuid,'8920a25e-aba7-11ec-b23c-2b25f84debc2'::uuid,'{"type": "twitter", "user": "@tom", "content": "ahoy there 3 #pirates"}','2022-03-24 15:21:45.336861-04','2022-03-24 18:56:16.451991-04'),
	 ('a4d1474c-aba7-11ec-9ff4-7b83f69e02d6'::uuid,'8920a25e-aba7-11ec-b23c-2b25f84debc2'::uuid,'{"type": "twitter", "user": "@tom", "content": "ahoy there 4 #pirates"}','2022-03-24 15:21:45.470776-04','2022-03-24 18:56:16.491981-04'),
	 ('a4e174dc-aba7-11ec-9ff4-fb841dc9cde9'::uuid,'8920a25e-aba7-11ec-b23c-2b25f84debc2'::uuid,'{"type": "twitter", "user": "@tom", "content": "ahoy there 5 #pirates"}','2022-03-24 15:21:45.576763-04','2022-03-24 18:56:16.530091-04'),
	 ('196ff390-aba9-11ec-b856-2f805b34de16'::uuid,'8920a25e-aba7-11ec-b23c-2b25f84debc2'::uuid,'{"type": "twitter", "user": "@tom", "content": "ahoy there 6 #pirates"}','2022-03-24 15:32:10.621973-04','2022-03-24 18:56:16.573415-04');
	
INSERT INTO public.user_screens (id,screen_canvas_id,user_billboard_id,user_screen_name,description,config,created_at,updated_at) VALUES
	 ('e1c46920-9f42-11ec-bbaa-bfd896e3d0f4'::uuid,'ce24f656-9465-11ec-abf7-bf7c0434b03a'::uuid,'35a27f4e-9f40-11ec-bbaa-bba14276ac27'::uuid,'My Content 1','It''s the best thing in the world!','{"type": "image", "asset": "https://ia802900.us.archive.org/20/items/mma_piece_205347/205347.jpg", "width": "100%", "height": "100%"}','2022-03-08 19:50:14.604348-05','2022-03-24 19:02:55.355559-04'),
	 ('f3d48d2e-9f43-11ec-a91f-3b57991b3222'::uuid,'ce24f656-9465-11ec-abf7-bf7c0434b03a'::uuid,'35a27f4e-9f40-11ec-bbaa-bba14276ac27'::uuid,'My Content 2','It''s the best thing in the world!','{"type": "image", "asset": "https://ia600303.us.archive.org/32/items/mma_piece_220161/220161.jpg", "width": "100%", "height": "100%"}','2022-03-08 19:57:54.404955-05','2022-03-24 19:02:55.409439-04'),
	 ('a7c6f0e4-9f47-11ec-abad-e7d442cd1f29'::uuid,'ce24f656-9465-11ec-abf7-bf7c0434b03a'::uuid,'35a27f4e-9f40-11ec-bbaa-bba14276ac27'::uuid,'My Content 3','It''s the best thing in the world!','{"type": "image", "asset": "https://ia600204.us.archive.org/0/items/mma_piece_223213/223213.jpg", "width": "100%", "height": "100%"}','2022-03-08 20:24:24.795565-05','2022-03-24 19:02:55.775977-04'),
	 ('2a252d46-a3b5-11ec-bbf5-1b08328bd156'::uuid,'ce24f656-9465-11ec-abf7-bf7c0434b03a'::uuid,'35a27f4e-9f40-11ec-bbaa-bba14276ac27'::uuid,'My Content 4','It''s the best thing in the world!','{"type": "image", "asset": "https://ia800502.us.archive.org/26/items/mma_piece_226453/226453.jpg", "width": "100%", "height": "100%"}','2022-03-14 12:38:23.310931-04','2022-03-24 19:02:55.826782-04'),
	 ('491a9f88-a3b5-11ec-9c43-af94a828a225'::uuid,'ce24f656-9465-11ec-abf7-bf7c0434b03a'::uuid,'d12cb650-9f40-11ec-bbaa-6fe27c042acc'::uuid,'My Content 1','It''s the best thing in the world!','{"type": "image", "asset": "https://ia802809.us.archive.org/3/items/mma_scherzo_di_follia_285608/285608.jpg", "width": "100%", "height": "100%"}','2022-03-14 12:39:15.25303-04','2022-03-24 19:02:55.916061-04'),
	 ('511a4830-a3b7-11ec-9766-c756e9dbc831'::uuid,'ce24f656-9465-11ec-abf7-bf7c0434b03a'::uuid,'d12cb650-9f40-11ec-bbaa-6fe27c042acc'::uuid,'My Content 2','It''s the best thing in the world!','{"type": "image", "asset": "https://ia800304.us.archive.org/28/items/mma_young_girl__with_cloak_of_cloth_over_head_sicily_italy_263864/263864.jpg", "width": "100%", "height": "100%"}','2022-03-14 12:53:47.664983-04','2022-03-24 19:02:55.997898-04'),
	 ('90336fc0-ab81-11ec-a8ff-affb367e46a3'::uuid,'ce24f656-9465-11ec-abf7-bf7c0434b03a'::uuid,'d12cb650-9f40-11ec-bbaa-6fe27c042acc'::uuid,'My Content 3','It''s the best thing in the world!','{"type": "image", "asset": "https://ia600307.us.archive.org/32/items/mma_maison_close_269875/269875.jpg", "width": "100%", "height": "100%"}','2022-03-24 10:49:10.005177-04','2022-03-24 19:02:56.04668-04'),
	 ('0825c2bc-ab82-11ec-bf93-a3fe51dd78aa'::uuid,'ce24f656-9465-11ec-abf7-bf7c0434b03a'::uuid,'d12cb650-9f40-11ec-bbaa-6fe27c042acc'::uuid,'My Content 4','It''s the best thing in the world!','{"type": "image", "asset": "https://ia802801.us.archive.org/11/items/mma_young_woman_sicily_italy_263860/263860.jpg", "width": "100%", "height": "100%"}','2022-03-24 10:52:31.242174-04','2022-03-24 19:02:56.136532-04');
	 
