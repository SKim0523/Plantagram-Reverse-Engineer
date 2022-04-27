const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    photo: {
        type: String
    },
    caption: {
        type: String
    },
    location: {
        type: String
    }
}, 
    {
        timeStamps: true
    }
);
const Post = mongoose.model('Post', postSchema);

module.exports = Post;