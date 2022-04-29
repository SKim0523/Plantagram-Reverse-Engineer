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
//https://mongoosejs.com/docs/tutorials/virtuals.html
userSchema.virtual('posts',{ 
    ref:'Post', // same as the collection name 
    localField:'_id',
    foreignField: 'user', // user property inside the Post model
    justOne: false
    })
//The ref option, which tells Mongoose which model to populate documents from.
// Mongoose will populate documents from the model in ref whose foreignField matches this document's localField.

const User = mongoose.model('User', userSchema);

module.exports = User;