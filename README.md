# Project-Two: Reverse-Engineer
MEN - Full stack app building

## **Project Description**
- This project reverse engineers three key features of the Instagram page to build a full-stack web application based on Express, Node.js, Mongoose and MongoDB. 
- CRUD functionalities are applied based on RESTful architecture.
- Entity Relationship Diagram shows One-to-Many data relationship between User and Post models:
![Screen Shot 2022-04-26 at 12 13 59 PM](https://user-images.githubusercontent.com/79298250/165356456-4b5f5b47-648b-46b0-b195-07e7f3354895.png)

## **Wireframe**
<img src="" alt="" width=""/></img>

## **Technologies Used**
- JavaScript
- Node.js
- Express
- Mongoose
- MongoDB
- CSS
- HTML
- Visual Studio Code
- GitHub
- Google Chrome

## **Getting Started:**
1. Install Visual Studio Code
2. Fork and clone the following repository: 
3. Access https://www.mongodb.com/ and select Project-Two: Reverse-Engineer database
4. Creat .env folder
5. Fetch the connection string from the database's Connect option and populat the string inside the .env
7. Open a root page (http://localhost:3000/main) on Google Chrome browser to start browsing

## **User Stories**

### Main Page (http://localhost:3000/main) 
1. The Main Page displays a register form, which requests for name, username, and email address, and two buttons: "Create Account With Tour" and "Create Account Wihtout Tour".
2. A user populates requested information and clicks a button of choice.

### Tour Page (http://localhost:3000/tour) 
1. The Tour Page displays.....

### Index Page (http://localhost:3000/main/index)
1. From top to bottom, the Index Page displays a username, a user profile photo, an Edit Profile button, and a grid space, which will be populated with photos. Each photo represents individual posting.
2. A user can access an Edit Profile page by clicking the Edit Profile button.
3. A user can click on a photo to access a Show Page.

### Show Page (http://localhost:3000/main/:id)
1. The Show Page displays a post, which includes a photo and a corresponding caption, Edit Post button and Delete button. 
2. A user can click Delete button to delete the post. Upon clicking the Delete button, the user is directed back to the Index Page.
3. A User can click Edit Post button to access a Edit Post Page.

### Edit Profile Page (http://localhost:3000/main/:id/editprof)
1. The Edit Proifle page displays a form that includes name, profile image, username, pronouns, website, email and bio categories.
2. A user can edit information and click submit button to update information.
3. Upon clicking the submit button, the user is directed back to the Index Page.

### Edit Post Page (http://localhost:3000/main/:id/editpost)
1. The Edit Proifle page displays photo url and a corresponding caption categories.
2. A user can edit information and click submit button to update information.
3. Upon clicking the submit button, the user is directed back to the Index Page.

## **MVP Goals**
As for MVP goals, we want to replicate below three CRUD features of Instagram using RESTful routes:
(1) Create: 
   - Register as user using a registration form
   - Create a new post including image and caption using a form
(2) Update:
   - Update user profile using an profile update form
   - Edit posts using a edit form
(3) Delete:
   - Delete post using a delete button

User flow improvement: The site will provide a tour(site-map/intro) option on the main screen for the orientation of the first-time user

Models: Two database models (user, post) that have one-to-many relationship

## **Stretch Goals**
User will be given an option to search different accounts
User will be given an option to follow the accounts they like
User will be given an option to rank the accounts they follow to receive more feeds from highly-ranked accounts 

