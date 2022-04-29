const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image: {
        type: String
    },
    caption: {
        type: String
    },
    location: {
        type: String
    },
    user:{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
}, 
    {
        timeStamps: true
    }
);
const Post = mongoose.model('Post', postSchema);

module.exports = Post;