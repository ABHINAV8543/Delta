const mongoose = require("mongoose");
const chat = require("./models/chat.js");

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

let sampleChats = [
    {
        from: "Amit",
        to: "Sahil",
        message: "help me yarr",
        date: new Date()
    },
    {
        from: "Sonu",
        to: "Ritik",
        message: "not intrested bro",
        date: new Date()
    },
    {
        from: "Mihul",
        to: "Kirti",
        message: "it's so hot in here",
        date: new Date()
    },
    {
        from: "Rahul",
        to: "Richa",
        message: "hell yeah!!",
        date: new Date()
    },
    {
        from: "Harry",
        to: "Umang",
        message: "are you even comming??",
        date: new Date()
    },
    {
        from: "Ridhi",
        to: "Sunita",
        message: "this needs to be fixed",
        date: new Date()
    },
    {
        from: "Richa",
        to: "Urmila",
        message: "i am dead right now",
        date: new Date()
    },
    {
        from: "Sunita",
        to: "Rahul",
        message: "he is so weird",
        date: new Date()
    }
];

chat.insertMany(sampleChats)
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});