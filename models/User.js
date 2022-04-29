const mongoose = require('mongoose');

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
},
    {
        timestamps: true
    }
);

userSchema.virtual('posts',{ 
    ref:'Post',
    localField:'_id',
    foreignField: 'user',
    justOne: false
    })

const User = mongoose.model('User', userSchema);

module.exports = User;