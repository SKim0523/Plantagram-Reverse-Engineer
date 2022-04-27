const mongoose = require('monggose');

const userSchema = new monggose.Schema({
    name: {
        type: String,
        required: [true, 'name cannot be blank']
    },
    profile image: {
        type: String,
    },
    username: {
        type: {
            String
        }
    }
})