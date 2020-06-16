const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String, required: true },
  authors: [{
      type: String
  }],
  description: String,
  image: String,
  link: String
}, {
    timestamps: true
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;