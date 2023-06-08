
const request = require('request');
const breed = process.argv.slice(2)[0];
const url = `https://api.thecatapi.com/v1/breeds/search?q=`;

request(`${url}${breed}`, (error, response, body) => {
  //if error
  if (error) {
    console.log("Error: " + error['code']);
    return;
  }

  //if response.statusCode !== 200
  if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
    return;
  }

  const jsonBody = JSON.parse(body);
  if (jsonBody.length === 0) {
    console.log(`Breed not found.`);
    return;
  }

  const catDesc = jsonBody[0].description;
  console.log(catDesc);
});