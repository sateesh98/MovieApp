const Movie = require('../models/movie.model');
const MovieList = require('../models/movielist.model');


// Retrieve and return all Movies from the database.
exports.findAll = (req, res) => {    
    
    MovieList.find()
    .then(movies => {        
        res.send(movies);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving movies."
        });
    });
};

// Retrieve and return all BookedMovie from the database.
exports.findAllBookings = (req, res) => {    
    
    Movie.find()
    .then(movies => {        
        res.send(movies);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving movies."
        });
    });
};


// Find a single movie with a movieId
exports.findOne = (req, res) => {
    
    Movie.findById(req.params.movieId)
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Movie not found with id " + req.params.movieId
            });            
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Movie not found with id " + req.params.movieId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving Movie with id " + req.params.movieId
        });
    });
};

// Create and Save a new Booking
exports.create = (req, res) => {

    //console.log(req.body);
    
    // create a Movie.
    const movie = new Movie({                
        UserName: req.body.UserName,        
        BookingID: req.body.AvailableCount,
        BookedCount: req.body.BookedCount
    });
        
    // Save movie in the database.
    movie.save()
    .then(data => {
        //console.log(res.statusCode);
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while booking the Movie."
        });
    });    
};


// Add a new Movie to List
exports.add = (req, res) => {
    // console.log(req.body);
    
    // create a Movie.
    const movielist = new MovieList({                
        Name: req.body.Name,        
        ImageSource: req.body.ImageSource,
        Description: req.body.Description,
        TotalCount: req.body.TotalCount
    });
        
    // Save movie in the database.
    movielist.save()
    .then(data => {
        //console.log(res.statusCode);
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while booking the Movie."
        });
    });  
};