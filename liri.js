// require("dotenv").config();

const fs = require('fs')
const axios = require('axios')
const [, , caseName, ...searchInput] = process.argv

// var keys = require("./keys.js");


// var spotify = new Spotify(keys.spotify);

// movie
//ttp://www.omdbapi.com/?i=tt3896198&apikey=1f2fc11c
let searchMovie = _ => {
    axios.get(`http://www.omdbapi.com/?t=${searchInput}&apikey=1f2fc11c`)
        .then(({ data: { Title, Year, Rated, Country, Language, Director } }) => {
            console.log(`
     Title:${Title}
     Year:${Year}
     Rated:${Rated}
     Country: ${Country}
     Language: ${Language}
     Director: ${Director}
     `)
        })
        .catch(e => console.log(e))
}


 switch (caseName) {
    case 'concert-this':

    break;

    case  'spotify-this-song':

    break;

    case 'movie-this':
    searchMovie()
    break;

    case 'do-what-it-says':

    break;
 }