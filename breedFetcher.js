
const request = require('request');
const url = `https://api.thecatapi.com/v1/breeds/search?q=`;

const fetchBreedDescription = function(breed, callback) {
  request(`${url}${breed}`, (error, response, body) => {

    //if error
    if (error) {
      // console.log("Error: " + error['code']);
      callback(null, error);
      return;
    }

    //if response.statusCode !== 200
    if (response.statusCode !== 200) {
      callback(null, response.statusCode);
      return;
    }

    const jsonBody = JSON.parse(body);
    if (jsonBody.length === 0) {
      callback(null, 'Breed not found.');
      return;
    }

    const catDesc = jsonBody[0].description;
    callback(catDesc, null);
  });
};

module.exports = { fetchBreedDescription };