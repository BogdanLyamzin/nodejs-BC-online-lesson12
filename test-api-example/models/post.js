const {Schema, model} = require("mongoose");

const postSchema = Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

const Post = model("post", postSchema);

module.exports = Post;