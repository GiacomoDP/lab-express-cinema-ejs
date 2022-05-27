const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const Movie = require("../models/Movie.model")
const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/lab-express-cinema";
let moviesFromDB = []
/* GET home page */
router.get('/', (req, res, next) => res.render('index'));




router.get('/movies', (req, res, next) => {
    
    mongoose
    .connect(MONGO_URI)
    .then((x) => {
      console.log(`Connected to Mongo for finding things! Database name: "${x.connections[0].name}"`);
      return  Movie.find().then((arrayMovies)=> {
        res.render('movies', {arrayMovies} )
        moviesFromDB = arrayMovies
      })


    })
    .catch((err) => {
      console.error("Error connecting to mongo: ", err);
    })
   .finally(()=>{
       console.log("DB Disconnected")
       mongoose.connection.close()
   })
});

router.get('/movies/:id', (req, res, next) => {
    let id = req.params.id
let movieDetails = moviesFromDB[id -1]
res.render('details', {movieDetails} )
console.log(movieDetails)

})



module.exports = router;
