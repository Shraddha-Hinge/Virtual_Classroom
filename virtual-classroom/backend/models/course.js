const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    units: [{
        name: String,
        sessions: [{
            name: String,
            lectures: [{
                name: String,
                content: String,
                discussions: [{
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
                }]
            }]
        }]
    }]
});

module.exports = mongoose.model('Course', courseSchema);