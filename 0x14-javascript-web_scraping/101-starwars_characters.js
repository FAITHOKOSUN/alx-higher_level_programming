#!/usr/bin/node
const request = require('request');

const apiUrl = 'https://swapi-api.hbtn.io/api/films/';

// Retrieve the movie ID from the command-line argument
const movieId = process.argv[2];

// Make a GET request to the Star Wars API for the movie details
request(apiUrl + movieId, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    const movie = JSON.parse(body);
    const characters = movie.characters;

    // Iterate over the characters array and print each character's name
    characters.forEach((characterUrl) => {
      request(characterUrl, (error, response, body) => {
        if (!error && response.statusCode === 200) {
          const character = JSON.parse(body);
          console.log(character.name);
        }
      });
    });
  } else {
    console.error('Error:', error);
  }
});

