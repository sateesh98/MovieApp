const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConfig = require('./config/database.config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;


// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// CORS support
app.use(cors());

// Require Employees routes
require('./app/routes/movies.routes.js')(app);

// connecting to the database.
mongoose.connect(dbConfig.url)
.then(()=>{
    console.log('Successfully connected to the database');
}).catch((err) => {
    console.log('Could not connect to the database.. Exiting now...');
    process.exit();
});

// define a simple route
app.get('/', (req, res) => {
    
    //res.json({"message": "Welcome to Employee application. Organize and keep track of all your employees."});

    res.send(`
        <html>
        <head> 
        <title>Movies </title>
        </head>
        <body>
        <h2> <p> Welcome to Movies Sectiom</p></h2>
        </body>
        </html>    
    `);
});

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

module.exports = app;