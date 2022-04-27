const express = require('express');
const router =  express.Router();
const db = require('../models')


// Routes: http://localhost:3000/users

// Displays form for registrating a "new" user

router.get('/registration', (req, res) => {
    res.render('registration.ejs');
})

//"show" route

router.get('/:id', async (req, res, next) => {
    try {
        const foundUser = await db.User.findById(req.params.id)
        const allPost = await db.Post.find({user: req.params.id})
        const context = { 
            oneUser: foundUser,
            posts: allPosts,
        }
        return res.render('profile.ejs', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

// router.get('/:id/edit', async (req,res, next)=>{
//     try {
//         const updatedUser = await db.User.findById(req.params.id);
//         const context = {
//             user: updatedUser
//         }
//         return res.render('editprof.ejs', context)
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// })

// Create route for user

router.post('/registration', async (req, res, next) => {
    try {
        const temp = {
            name: req.body.name,
            profile_image: req.body.profile_image,
            username: req.body.username,
            pronouns: " ",
            website: " ",
            email: req.body.email,
            bio: " "
        };
        // console.log(`The req.body is ${req.body}`)
        const createdUser = await db.User.create(temp);
        // console.log(`The created product is ${createdUser}`)
        res.redirect('/profile');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
});


//I need to get access to the profile page
//the profile displays come profile info on the top
//and postings at the bottom
// >>> Bind theses two inside an ejs file 

module.exports = router