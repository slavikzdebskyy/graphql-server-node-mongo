const mongoose = require('mongoose');
const { citiesModelName } = require('../constans');

module.exports =  mongoose.model(citiesModelName, {
  name: String,
  bg_image: String,
  country: String,
  title: String,
  description: Array,
  mustVisit: Array
});