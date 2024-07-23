const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    imageURL: String,
    caption: String
});

const PostModel = mongoose.model("Post", PostSchema);

module.exports = PostModel;
