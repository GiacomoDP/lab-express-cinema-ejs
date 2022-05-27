const mongoose = require ("mongoose");

const schemaMovies = new mongoose.Schema({
    title: String,
    director: String,
    stars: [String],
    image: String,
    description: String,
    showtimes: [String]
})

const Movie = mongoose.model ("Movie", schemaMovies);
module.exports = Movie