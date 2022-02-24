-- This all has been ran already.
-- Keeps all the updated_at column updated with the current date when there is an update. 
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