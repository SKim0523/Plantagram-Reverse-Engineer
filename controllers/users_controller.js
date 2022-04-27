const express = require('express');
const router =  express.Router();
const db = require('..models')



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

module.exports = router