module.exports = (app) => {
    
    const movies = require('../controllers/movies.controller.js');


    // Retrieve all Employees
    app.get('/movies', movies.findAll);

    // Retrieve all bookings
    app.get('/bookings', movies.findAllBookings);

    // Retrieve a Movie with based movie Id
    app.get('/movies/:Id', movies.findOne);

    // Book a new Movie
    app.post('/movies', movies.create);

    // add a new Movie
    app.post('/addmovies', movies.add);    
}