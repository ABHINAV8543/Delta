const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");
const chat = require("./models/chat.js");
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded( { extended: true } ));

const port=3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

async function connect() {
  await mongoose.connect("mongodb://localhost:27017/chat");
}
connect()
.then(() => {
    console.log("Connected to Database");
})
.catch((error) => {
    console.log("Database connection failed...");
    console.log(error);
});

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/chats", async (req, res) => {
    let allChats = await chat.find();
    res.render("chats", { allChats });
});

app.get("/chats/new", (req, res) => {
    res.render("new");
});

app.post("/chats", (req, res) => {
    let {from, to, message} = req.body;
    let date = new Date();

    chat.insertOne({
        from: from,
        to: to,
        message: message,
        date: date
    })

    res.redirect("/chats");
});

app.get("/chats/edit/:id", async (req, res) => {
    const id = req.params.id;
    let currChat = await chat.findOne({_id: id});
    res.render("edit", { chat: currChat });
});

app.put("/chats/edit/:id", async (req, res) => {
    const id = req.params.id;
    let {from, to, message} = req.body;
    let currChat = await chat.updateOne({_id: id}, { $set:{
        to: to,
        from: from,
        message: message,
        edited: true,
    }});
    res.redirect("/chats");
});

app.delete('/chats/delete/:id', async (req, res) => {
    const id = req.params.id;
    await chat.findByIdAndDelete(id);
    res.json({ redirectUrl: '/chats' }); 
});