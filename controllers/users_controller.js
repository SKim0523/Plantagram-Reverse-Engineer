const express = require('express');
const router =  express.Router();
const db = require('../models')


// Routes: http://localhost:3000/users

// Displays form for registrating a new user

router.get('/registraion', (req, res) => {
    res.render('registration.ejs')
})

// Create route for user

router.post('/', async (req, res, next) => {

    try {
        // console.log(`The req.body is ${req.body}`)
        const createdUser = await db.User.create(req.body);
        console.log(`The created product is ${createdUser}`)
        res.redirect('/profile');
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})


//I need to get access to the profile page
//the profile displays come profile info on the top
//and postings at the bottom
// >>> Bind theses two inside an ejs file 

module.exports = router