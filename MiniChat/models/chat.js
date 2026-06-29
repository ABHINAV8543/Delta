const mongoose = require("mongoose");

const chatSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
    },

    from: {
        type: String,
        required: true
    },

    to: {
        type: String,
        required: true
    },

    message: {
        type: String
    },

    edited: {
        type: Boolean,
        default: false
    }
});

const chat = mongoose.model("chat", chatSchema);
module.exports = chat;