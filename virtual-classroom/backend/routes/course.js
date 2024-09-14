const express = require('express');
const router = express.Router();
const Course = require('../models/course');
const jwtHelper = require('../utils/jwtHelper');

router.post('/', jwtHelper.authenticateToken, async (req, res) => {
    const { name } = req.body;

    const newCourse = new Course({ name, instructor: req.user._id });
    await newCourse.save();

    res.json(newCourse);
});

router.get('/', jwtHelper.authenticateToken, async (req, res) => {
    const courses = await Course.find();
    res.json(courses);
});

module.exports = router;