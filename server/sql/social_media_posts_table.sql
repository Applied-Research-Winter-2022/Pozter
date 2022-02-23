-- This has been ran already.
create table if not exists social_media_posts (
id uuid default uuid_generate_v1mc() primary key not null,
social_media_content_id uuid,
user_billboard_content jsonb,
created_at timestamp(6) with time zone default Now() not null,
updated_at timestamp(6) with time zone
);
