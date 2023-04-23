const mongoose = require("mongoose");
const bookSchema = mongoose.Schema({
    title:String,
    isbn:String,
    author:String,
    description:String,
    publishedDate:String,
    publisher:String
})

const Book = mongoose.model("Book",bookSchema)

module.exports = Book