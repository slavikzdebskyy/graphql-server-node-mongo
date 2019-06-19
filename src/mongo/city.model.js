import mongoose from 'mongoose';
import { citiesModelName } from '../constans';

export default mongoose.model(citiesModelName, {
  name: String,
  bg_image: String,
  country: String,
  title: String,
  description: Array,
  mustVisit: Array
});



