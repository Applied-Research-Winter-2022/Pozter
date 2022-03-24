const db = require("../connection/pg");

module.exports = {
  async fetchByIdFull(id) {
    const userBillboard = await db.query(`SELECT * FROM user_billboards WHERE id = '${id}';`);
    for (let ubRowIndex in userBillboard.rows) {
      let ubRow = userBillboard.rows[ubRowIndex];
      
      // social media content branch
      let socialMediaContent = await db.query(`SELECT * FROM social_media_contents WHERE user_billboard_id = '${id}';`);
      ubRow.social_media_content = socialMediaContent.rows;
      for (let smcRowIndex in ubRow.social_media_content) {
        let smcRow = ubRow.social_media_content[smcRowIndex];
        let socialMediaPosts = await db.query(`SELECT * FROM social_media_posts WHERE social_media_content_id = '${smcRow.id}';`);
        smcRow.social_media_posts = socialMediaPosts.rows;
      }

      // user screens branch
      let userScreens = await db.query(`SELECT * FROM user_screens WHERE user_billboard_id = '${id}';`);
      ubRow.user_screens = userScreens.rows;
      
      let processedScreenCanvasIds = []; // only do queries for user_screen_ids that we don't have yet
      for (let usRowIndex in ubRow.user_screens) {
        let usRow = ubRow.user_screens[usRowIndex];
        if (!processedScreenCanvasIds.includes(usRow.screen_canvas_id)) {
          let screenCanvases = await db.query(`SELECT * FROM screen_canvases WHERE id = '${usRow.screen_canvas_id}';`);
          usRow.screen_canvases = screenCanvases.rows;
          processedScreenCanvasIds.push(usRow.screen_canvas_id);
        }
      }
    }
    return userBillboard;
  },
};

// old query (result has weird formatting, so not using):
// "SELECT ub.id,    ub.config as user_billboard_config," +
// "                 us.id as user_screen_id,      us.config as user_screen_config," +
// "                 sc.id as screen_canvas_id,    sc.config as screen_canvas_config," +
// "                 smc.config as social_media_content_config," +
// "                 smp.content as social_media_post_content" +
// " FROM user_billboards ub" +
// ` JOIN user_screens us ON us.user_billboard_id = '${id}'` +
// ` JOIN screen_canvases sc ON sc.id = us.screen_canvas_id` +
// ` JOIN social_media_contents smc ON smc.user_billboard_id = '${id}'` +
// ` JOIN social_media_posts smp ON smp.social_media_content_id = smc.id` +
// ` WHERE ub.id = '${id}'`