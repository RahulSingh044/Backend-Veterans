const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/dataAssociationTest');

const userSchema = mongoose.Schema({
    username: String,
    email: String,
    age: Number,

    // it will store the id's of the post that user create...
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'posts' // reference to the post model
        }
    ]
})

module.exports = mongoose.model('user', userSchema);