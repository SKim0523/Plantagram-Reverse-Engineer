const express = require('express')
const router = express.Router()
const db = require('../models')

//ROUTES - http://localhost:3000/posts

//get all posts
// router.get('/', async (req, res, next) => {
//     try {
//         const posts = await db.Post.find({});
//         const context = { posts }
//         return res.render('profile.ejs', context);
//     } catch (error) {
//         console.log(error);
//         req.error = error;
//         return next();
//     }
// });

// Displays formfor new post
router.get('/new/:id', async (req, res, next) =>{
    const context = {user: req.params.id}
    res.render('posts/new.ejs', context)
    // console.log(context)
})

// create - POST route 
router.post('/new', async (req,res, next)=>{
    try{
        const newPost = await db.Post.create(req.body)
        // console.log(`The created product is ${newPost}`)
        // res.redirect('/post')
        const id = req.body.user
        res.redirect(`/users/profile/${id}`) 
        // return user to profile with posts page -> 
    } catch(err){
        console.log(error);
        req.error = error;
        return next();
    }
});

//Show route
router.get('/:postId', async (req,res, next)=>{
    try {
        const foundPost = await db.Post.findById(req.params.postId)
        const context = { 
            post: foundPost
        }
        res.render('posts/show.ejs', context)
    }catch(error){
        console.log(error);
        req.error = error;
        return next();
    }
})

// "Edit Post" link; Form for editing post
router.get('/edit/:postId', async (req,res, next)=>{
    try {
        const updatedPost = await db.Post.findById(req.params.postId);
        const context = {
            post: updatedPost
        }
        return res.render('posts/edit.ejs', context)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

//"Save Button" on Edit Post Page; 
router.put('/edit/:postId', async (req, res, next) => {
    try {
        const updatedPost = await db.Post.findByIdAndUpdate(req.params.postId, req.body);
        const user = await db.User.findById(updatedPost.user)
        // console.log(req.body);
        // console.log(user);
        return res.redirect(`/users/profile/${user._id}`)
        console.log(req.body)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

//"Delete" post
router.delete('/:postId', async (req,res, next)=>{
    try {
        const deletedPost = await db.Post.findByIdAndDelete(req.params.postId);
        const user = await db.User.findById(deletedPost.user)
        return res.redirect(`/users/profile/${user._id}`)
    } catch (error) {
        console.log(error);
        req.error = error;
        return next();
    }
})

module.exports = router