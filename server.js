const express = require('express');
const app = express();
const PORT = 3000;
const controllers = require('./controllers');
const methodOverride = require('method-override')

require('./config/db.connection')

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: false }))
app.use('/users', controllers.users)

app.set('view engine', 'ejs')

app.get('/tour', (req, res) => {
    res.render('tour.ejs')
})


app.listen(PORT, () => console.log (`Listening on port: ${PORT}`));


// | Method | Route         | Description             |
// | ------ | ------------- | ----------------------- |
// | GET    | /             | Read all posts          |
// | GET    | /state/:state | Read all posts by state |
// | POST   | /             | Create post\*           |
// | PUT    | /id/:id       | Update entire post\*    |
// | DELETE | /id/:id       | Delete post\*           |

// Welcome Page >> /user/registration
// Tour Page >> /tour
// Index Page >> /user/profile