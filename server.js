const express = require("express");
const app = express();
const port = process.env.PORT | 80;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "pug");

app.get("/", function (req, res) {
  res.render("index", { title: "Hey", message: "Hello there!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
