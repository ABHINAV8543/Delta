const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");
const chat = require("./models/chat.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));

const port=3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

async function connect() {
  await mongoose.connect("mongodb://localhost:27017/chat");
}
connect()
.then(() => {
    console.log("connection successful");
})
.catch((error) => {
    console.log(error);
});

app.get("/", async (req, res) => {
  const chats = await chat.find();
  res.render("home", { chats });
});