const serveStatic = require("serve-static");
const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", function (req, res) {
  res.send("Hello World");
});

// Billboard
app.use("/billboard/id", require("./routes/billboard/fetchById"));
app.use("/billboards", require("./routes/billboard/fetchAll"));
// Screen Canvases
app.use("/screen_canvas/id", require("./routes/screen_canvas/fetchById"));
app.use("/screen_canvases", require("./routes/screen_canvas/fetchAll"));
// User Screens
app.use("/user_screen/create", require("./routes/user_screen/create"));
app.use("/user_screen/id", require("./routes/user_screen/fetchById"));
app.use("/user_screens", require("./routes/user_screen/fetchAll"));
// Social Media Posts
app.use("/social_media_post/create", require("./routes/social_media_post/create"));
app.use("/social_media_post/id", require("./routes/social_media_post/fetchById"));
app.use("/social_media_posts", require("./routes/social_media_post/fetchAll"));
// User Billboard
app.use("/user_billboard/create", require("./routes/user_billboard/create"));
app.use("/user_billboard/full/id", require("./routes/user_billboard/fetchByIdFull"));
// Social Media Content
app.use("/social_media_content/create", require("./routes/social_media_content/create"));
app.use("/social_media_content/id", require("./routes/social_media_content/fetchById"));
app.use("/social_media_content/user_billboard_id", require("./routes/social_media_content/fetchByUserBillboardId"));

// this * route is to serve project on different page routes except root `/`
app.get(/.*/, function (req, res) {
  res.sendFile(path.join(__dirname, "../webui/dist/index.html"));
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
