const mongoose = require("mongoose");

async function connect() {
  await mongoose.connect("mongodb://localhost:27017/temp");
}

connect()
.then(() => {
    console.log("connection successful");
})
.catch((error) => {
    console.log(error);
});

const schema=mongoose.Schema({
    name: {type: String},
    age: {type: Number}
});

const user=mongoose.model("user", schema);

user.insertOne({
    name: "Sahil",
    age: 16
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.log(error);
});