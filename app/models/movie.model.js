const mongoose = require('mongoose');

const MovieSchema = mongoose.Schema({                    
    UserName: String,
    BookingID: String,    
    BookedCount: Number
}, {
    versionKey: false,
    timestamps: false
});

module.exports = mongoose.model('Movie', MovieSchema);