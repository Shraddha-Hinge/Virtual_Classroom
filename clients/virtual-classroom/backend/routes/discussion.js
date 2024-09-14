const express = require('express');
const router = express.Router();
const Discussion = require('../models/discussion');
const jwtHelper = require('../utils/jwtHelper');

router.post('/:discussionId/replies', jwtHelper.authenticateToken, async (req, res) => {
    const { discussionId } = req.params;
    const { text } = req.body;

    const discussion = await Discussion.findById(discussionId);
    if (!discussion) {
        return res.status(404).json({ message: 'Discussion not found' });
    }

    discussion.replies.push({
        user: req.user._id,
        text
    });

    await discussion.save();
    res.json(discussion);
});

// ... other discussion routes

module.exports = router;