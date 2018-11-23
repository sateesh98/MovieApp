const mongoose = require('mongoose');

const MovieListSchema = mongoose.Schema({                    
    Name: String,
    ImageSource: String,    
    Description: String,
    TotalCount: Number
}, {
    versionKey: false,
    timestamps: false
});

module.exports = mongoose.model('MovieList', MovieListSchema);