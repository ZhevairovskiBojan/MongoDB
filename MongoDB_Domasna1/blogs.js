
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
  naslov: "naslovBlog1",
  opis: "opisBlog1",
  ocenka: 5,
  vreme: Date,
  avtor: "avtorBlog1"
});

const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
  