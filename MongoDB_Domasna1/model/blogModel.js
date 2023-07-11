const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    naslov: {
        type: String,
        required: [true, "Vnesi naslov."],
    },
    opis: {
        type: String,
    },
    avtor: {
        type: String,
        required: [true, "Vnesi avtor."]
    },
    ocenka: {
        type: Number,
        default: 3,
    },
    Datum: {
        type: Date,
        default: Date.now,
    }
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;