const mongoose = require('mongoose');
const movieschema = mongoose.Schema({
    movietitle: {
        type: String
    },
    moviedirector: {
        type: String
    }
})
module.exports = mongoose.model('movies', movieschema);