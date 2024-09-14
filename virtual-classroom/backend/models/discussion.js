const mongoose = require('mongoose');

const discussionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    text: String,
    replies: [{
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        text: String
    }]
});

module.exports = mongoose.model('Discussion', discussionSchema);