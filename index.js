const { fetchBreedDescription } = require('./breedFetcher');
const breed = process.argv.slice(2)[0];

fetchBreedDescription(breed, (data, error) => {
  if (error){
    console.log('Error fetch details:', error)
    return
  }
  console.log(data)
});
