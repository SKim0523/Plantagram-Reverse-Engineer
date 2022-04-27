const mongoose = require('monggose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be blank']
    },
    profile_image: {
        type: String,
    },
    username: {
        type: String,
        required: [true, 'username cannot be empty']
    },
    pronouns: {
        type: String
    },
    website: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'email cannot be empty']
    }, 
    bio: {
        type: String
    }
});

const User = mongoose.model('Users', userSchema);

module.exports = User