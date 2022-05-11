# Project-Two: Reverse-Engineer
MEN - Full stack app building (Team Project of Sarah Kim and Brigitte Quintero)
See our application here:
https://morning-tundra-63399.herokuapp.com/users/registration

## Project Description:
- This project reverse engineers three key features of the Instagram page to build a full-stack web application based on Express, Node.js, Mongoose and MongoDB. The three key features include:
   1. Create a user and posts
   2. Update a user profile and posts
   3. Delete posts 
- CRUD functionalities are applied based on RESTful architecture.
- Entity Relationship Diagram shows One-to-Many data relationship between User and Post models:

![Screen Shot 2022-04-26 at 12 13 59 PM](https://user-images.githubusercontent.com/79298250/165356456-4b5f5b47-648b-46b0-b195-07e7f3354895.png)

## Wireframe:
When opening the website, users will be directed to the Welcome Page where they can register and create an account. Once they have Created Account, they will be directed to a their Profile Page. Users can click on the Tour link to have a tour of the site that will give them a quick How To on navigating and using the site.

### Registration Page
![image](https://user-images.githubusercontent.com/79298250/166408231-692b396c-e1e5-4252-b556-839210974f01.png)
### Profile Page
![image](https://user-images.githubusercontent.com/79298250/166408150-95028a1a-59b3-4930-80e6-4b37cf2f5cc8.png)
### Tour Page
![image](https://user-images.githubusercontent.com/79298250/166408299-fda37ec6-919c-482b-9fbb-71b879b9ce2a.png)

From the the profile page, users can do a few things such as creating post, viewing a post, and editing their profile. Once a post has been created, users will also be able to update and delete their post.
### Create Post Page
![image](https://user-images.githubusercontent.com/79298250/166408353-6c34e60d-ac95-456a-8894-f9dbc3e276a3.png)
### Edit Post Page
![image](https://user-images.githubusercontent.com/79298250/166408434-dcde0a5e-cdd7-4ff0-ae58-b0078886f533.png)
### Edit Profile Page
![image](https://user-images.githubusercontent.com/79298250/166408404-a089ee94-b004-454e-94f0-e026ebd734fa.png)

## Technologies Used:
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

## Routes Pages
| Method | Route              | Description                    |
| ------ | ------------------ | ------------------------------ |
| GET    | /registration      | Lands on registration page     |
| GET    | /profile/:id       | Lands on user profile page     |
| GET    | /profile/edit/:id  | Displays form for editing user |
| GET    | /new/:id           | Displays form for adding post  | 
| GET    | /:postId           | Lands on a Post show page      |
| GET    | /edit/:postId      | Displays form for editing post |
| POST   | /registration      | Creates an account             |
| POST   | /new               | Creates a post                 |
| PUT    | /profile/edit/:id  | Edits user profile page        | 
| PUT    | /edit/:postId      | Edits a specific post          | 
| DELETE | /:postId           | Deletes post                   |

## User Stories:
### Welcome Page  
1. The Welcome Page displays a registration form, which requests name, username, link to profile photo and email address, as well as a button: "Create Account."
2. A user populates the requested information and clicks the "Create Account."

### Profile Page 
1. The Profile Page displays a name, username, a user profile photo, an "Add Post" link, an "Edit Profile" link, and a grid space, which will be populated with photos. Each photo represents an individual posting.
2. A user can click the "Add Post" link to access a page to create a new post.
3. A user can click on a photo to access a coresponding post's show page.
4. A user can access the Edit Profile page by clicking the "Edit Profile" link.
4. A user can access the Tour page by clicking the "Tour" link.

### Tour Page 
* This page is part of the user flow improvement plan
1. The Tour Page displays screenshots of below pages along with explanation of functionalities.
   - Profile Page and Add Post Page (accessible via Profile Page)
   - Post Show Page and Edit Post Page (accessible via Show Page)
   - Edit Profile Page
2. A user aquires understanding of how to navagate by reading the information and clicks "Complete Tour" button.
3. Upon clickinig the "Complete Tour" button, the user is directed to the Profile Page.

### Add Post Page 
1. The Add Post Page Displays a form that includes photo url, caption, location, and user ID (read only) categories.
2. A user can populate information in the provided space and click "Create New Post" button.
3. Upon clicking the "Create New Post" button, the user is directed back to the Profile Page.

### Show Page 
1. The Show Page displays a post, which includes a photo and a corresponding caption, location, "Edit Post" link and "Delete Post" button. 
2. A User can click the "Edit Post" link to access a Edit Post Page.
3. A user can click the "Delete Post" button to delete the post. Upon deletion, the user is directed back to the profile Page.

### Edit Post Page
1. The Edit Post page displays a photo, caption, and location categories.
2. A user can edit information and click "Save" button to update information.
3. Upon clicking the "Save" button, the user is directed back to the Profile Page.

### Edit Profile Page 
1. The Edit Proifle page displays a form that includes name, pronouns, username, email, profile image, website and bio categories.
2. A user can edit information and click "Save" button to update information.
3. Upon clicking the "Save" button, the user is directed back to the Profile Page.

## MVP Goals
1. Replicate below three CRUD features of Instagram using RESTful routes:
   #### (1) Create:
      - Register as user using a registration form
      - Create a new post using a new post form
   #### (2) Update:
      - Update user profile using a profile update form
      - Edit posts using a post edit form
   #### (3) Delete:
      - Delete posts using a delete button
2. User flow improvement: The site will provide a tour option for the orientation of the first-time user
3. Models: Two database models (user, post) that have one-to-many relationship

## Unsolved Problems and Challenges
Working with grid was a little difficult. Trying to acheive a layout with multiple elements and staggering them on the screen in a way that flowed with our layout was a challenge. We acheived our main goal but without some design functionality we preffered.

## Next Steps
On top of resolving the above mentioned problems, we would like to enhance the site with the following added features:
- User will be given an option to search different accounts
- User will be given an option to like a post
