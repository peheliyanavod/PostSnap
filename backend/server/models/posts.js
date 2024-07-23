const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    imageURL: String,
})

const PostModel = mongoose.model("post",PostSchema);

module.exports = PostModel;