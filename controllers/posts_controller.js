const express = require('express')
const router = express.Router()
const db = require('../models')

//ROUTES - http://localhost:3000/posts

//get all posts
router.get('/', async (req, res, next) => {
    try {
        const posts = await db.Post.find({});
        const context = { posts }
        return res.render('profile.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});