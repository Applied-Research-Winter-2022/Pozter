const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

// Billboard
app.use("/billboard/id", require("./routes/billboard/fetchById"));
app.use("/billboards", require("./routes/billboard/fetchAll"));

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

module.exports = app;
