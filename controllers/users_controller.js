const express = require('express');
const router =  express.Router();
const db = require('../models');

// Routes: http://localhost:3000/users

// Directs user from profile page to Tour Page
router.get('/tour/:id', async (req, res, next) => {
    try {
        const touringUser= await db.User.findById(req.params.id);
        const context = { 
            user: touringUser
        };
        res.render('tour.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

// Directs user from Tour page to Profile Page
router.get('/tour/:id', async (req, res, next) => {
    try {
        const touringUser= await db.User.findById(req.params.id);
        const context = { 
            user: touringUser
        };
        return res.redirect(`/users/profile/${user}`);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

// Displays form for registrating a new user

router.get('/registration', (req, res) => {
    res.render('registration.ejs');
});

// Create Account button
router.post('/registration', async (req, res, next) => {
    try {
        const temp = {
            name: req.body.name,
            profile_image: req.body.image,
            username: req.body.username,
            pronouns: "",
            website: "",
            email: req.body.email,
            bio: ""
        };
        const createdUser = await db.User.create(temp);
        const id=createdUser._id.valueOf();
        res.redirect(`/users/profile/${id}`);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

// Displays user's profile page
router.get('/profile/:id', async (req, res, next) => {
    try {
        const foundUser = await db.User.findById(req.params.id).populate('posts');
        const context = { 
            oneUser: foundUser,
            posts: foundUser.posts
        };
        return res.render('profile.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

// Edit Profile link; Form for editing user
router.get('/profile/edit/:id', async (req,res, next)=>{
    try {
        const updatedUser = await db.User.findById(req.params.id);
        const context = {
            user: updatedUser
        };
        return res.render('editprof.ejs', context);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

// Save Button on Edit Profile Page; 
router.put('/profile/edit/:id', async (req, res, next) => {
    try {
        const updatedUser = await db.User.findByIdAndUpdate(req.params.id, req.body);
        return res.redirect(`/users/profile/${req.params.id}`);
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    };
});

module.exports = router