# Project-Two: Reverse-Engineer
MEN - Full stack app building

## **Project Description:**
- This project reverse engineers three key features of the Instagram page to build a full-stack web application based on Express, Node.js, Mongoose and MongoDB. 
- CRUD functionalities are applied based on RESTful architecture.
- Entity Relationship Diagram shows One-to-Many data relationship between User and Post models:
![Screen Shot 2022-04-26 at 12 13 59 PM](https://user-images.githubusercontent.com/79298250/165356456-4b5f5b47-648b-46b0-b195-07e7f3354895.png)

## **Wireframe:**
<img src="" alt="" width=""/></img>

## **Technologies Used:**
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
2. Fork and clone the following repository: https://github.com/SKim0523/Project-Two---Reverse-Engineer.git
3. Access https://www.mongodb.com/ and select Project-Two: Reverse-Engineer database
4. Create .env file
5. Fetch the connection string from the database's Connect option and populate the string inside the .env file
7. Open a root page (http://localhost:3000/welcome) on Google Chrome browser to start browsing

## **User Stories:**

### Welcome Page (http://localhost:3000/welcome) 
1. The Welcome Page displays a register form, which requests for name, username, and email address, and two buttons: "Create Account With Tour" and "Create Account Wihtout Tour."
2. A user populates requested information and clicks a button of choice.

### Tour Page (http://localhost:3000/tour)
* This page is part of the user flow improvement plan
1. The Tour Page displays screenshots of below pages along with explanation of functionalities.
   - Index Page and Add Post Page (accessible via Index Page)
   - Show Page and Edit Post Page (accessible via Show Page)
   - Edit Profile Page
2. A user aquires understanding of how to navagate by reading the information and clicks "Complete Tour" button.
3. Upon clickinig the "Complete Tour" button, the user is directed to the Index Page.

### Index Page (http://localhost:3000/index)
1. The Index Page displays a username, a user profile photo, a "+" (add post) button, an "Edit Profile" button, and a grid space, which will be populated with photos. Each photo represents an individual posting.
2. A user can click the "+" button to access the Add Post Page.
3. A user can click on a photo to access a coresponding Show Page.
4. A user can access an Edit Profile page by clicking the "Edit Profile" button.

### Add Post Page (http://localhost:3000/new)
1. The Add Post Page Displays a form that includes photo, caption, and location categories.
2. A user can populate information in the provided space and click "Add Post" button.
3. Upon clicking the "Add Post" button, the user is directed back to the Index Page.

### Show Page (http://localhost:3000/:id)
1. The Show Page displays a post, which includes a photo and a corresponding caption, "Edit" button and "Delete" button. 
2. A User can click the "Edit" button to access a Edit Post Page.
3. A user can click the "Delete" button to delete the post. Upon deletion, the user is directed back to the Index Page.

### Edit Post Page (http://localhost:3000/:id/editpost)
1. The Edit Post page displays photo url, caption, and location categories.
2. A user can edit information and click "Save" button to update information.
3. Upon clicking the "Save" button, the user is directed back to the Index Page.

### Edit Profile Page (http://localhost:3000/editprof)
1. The Edit Proifle page displays a form that includes name, profile image, username, pronouns, website, email, and bio categories.
2. A user can edit information and click "Save" button to update information.
3. Upon clicking the "Save" button, the user is directed back to the Index Page.

## **MVP Goals**
1. Replicate below three CRUD features of Instagram using RESTful routes:
   (1) Create: 
      - Register as user using a registration form
      - Create a new post including image and caption using a new post form
   (2) Update:
      - Update user profile using a profile update form
      - Edit posts using a post edit form
   (3) Delete:
      - Delete posts using a delete button
2. User flow improvement: The site will provide a tour option for the orientation of the first-time user
3. Models: Two database models (user, post) that have one-to-many relationship

## **Stretch Goals**
- User will be given an option to search different accounts
- User will be given an option to follow the accounts they like
- User will be given an option to rank the accounts they follow to receive more feeds from highly-ranked accounts 

