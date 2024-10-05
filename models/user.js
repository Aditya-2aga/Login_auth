const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/Mini3");

const userSchema = mongoose.Schema({
    username: String,
    name: String,
    email: String,
    age: Number,
    password: String,
    displaypic: {
        type: String,
        default: "default.jpg"
    },
    posts: [
        {type: mongoose.Schema.Types.ObjectId, ref: "post"}
    ]
})

module.exports = mongoose.model('user', userSchema);