const mongoose = require('mongoose');
const { countriesModelName } = require('../constans');

module.exports =  mongoose.model(countriesModelName, {
  country: String,
  cities: Array,
  bg_image: String,
  title: String,
  about: Array	
});