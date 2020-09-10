const axios = require("axios");
const { API_KEY } = require("../../config.js");

const getBreeds = () => {
  return axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}&limit=8`
  );
};

const searchBreeds = (str) => {
  return axios.get(
    `https://api.thedogapi.com/v1/breeds/search?api_key=${API_KEY}&name=${str}`
  );
};

const getPhotoById = (breedId) => {
  return axios.get(
    `https://api.thedogapi.com/v1/images/search?api_key=${API_KEY}&breed_id=${breedId}`
  );
};

module.exports.getBreeds = getBreeds;
module.exports.searchBreeds = searchBreeds;
module.exports.getPhotoById = getPhotoById;
