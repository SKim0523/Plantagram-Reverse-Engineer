const express = require('express');
const router =  express.Router();
const db = require('../models')


// Routes: http://localhost:3000/users

// Directs user from profile page to Tour Page
router.get('/tour/:id', async (req, res, next) => {
    try {
        const touringUser= await db.User.findById(req.params.id);
        // console.log(touringUser)
        const context = { 
            user: touringUser
        }
        res.render('tour.ejs', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// (0) Directs user from Tour page to Profile Page
router.get('/tour/:id', async (req, res, next) => {
    try {
        const touringUser= await db.User.findById(req.params.id);
        const context = { 
            user: touringUser
        }
        return res.redirect(`/users/profile/${user}`)
        console.log(req.body)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// (1) Displays form for registrating a "new" user

router.get('/registration', (req, res) => {
    res.render('registration.ejs');
})

// (2) 'Create Account' button; Creates a user with the help of (1)

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
        // console.log(`The req.body is`, req.body)
        const createdUser = await db.User.create(temp);
        // const foundUser = await db.User.findById(req.params.id)
        // console.log(createdUser)
        // console.log(createdUser._id.valueOf())
        const id=createdUser._id.valueOf()
        // console.log(`The created product is ${createdUser}`)
        // const context = { 
        //     oneUser: createdUser,
        // }
        // res.render('/profile.ejs',context);
        res.redirect(`/users/profile/${id}`);
        // setTimeout(() => {res.redirect(`/users/profile/${id}`)}, 1000)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});

// (3) Displays user's profile page

router.get('/profile/:id', async (req, res, next) => {
    try {
        const foundUser = await db.User.findById(req.params.id).populate('posts')
        // const allPosts = await db.Post.find({user: req.params.id})
        const context = { 
            oneUser: foundUser,
            posts: foundUser.posts
        }
        return res.render('profile.ejs', context)
        console.log(context)
        // console.log(foundUser)
        // console.log(req.params.id)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// (4) "Edit Profile" link; Form for editing user
router.get('/profile/edit/:id', async (req,res, next)=>{
    try {
        const updatedUser = await db.User.findById(req.params.id);
        const context = {
            user: updatedUser
        }
        return res.render('editprof.ejs', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// (5) "Save Button" on Edit Profile Page; 
router.put('/profile/edit/:id', async (req, res, next) => {
    try {
        const updatedUser = await db.User.findByIdAndUpdate(req.params.id, req.body);
        // console.log(req.body);
        // console.log(updatedUser);
        return res.redirect(`/users/profile/${req.params.id}`)
        console.log(req.body)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


module.exports = router