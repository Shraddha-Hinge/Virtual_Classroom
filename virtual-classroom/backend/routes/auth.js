const express = require('express');
const router = express.Router();
const User = require('../models/user');
const jwt = require('jsonwebtoken');
const jwtHelper = require('../utils/jwtHelper');

router.post('/register', async (req, res) => {
    const { username, password, role } = req.body;

    const userExists = await User.findOne({ username });
    if (userExists) {
        return res.status(400).json({ message: 'Username already exists' });
    }

    const newUser = new User({ username, password, role });
    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, 'your-secret-key');
    res.json({ token });
});

router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user || !user.isValidPassword(password)) {
        return res.status(400).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user._id }, 'your-secret-key');
    res.json({ token });
});

module.exports = router;