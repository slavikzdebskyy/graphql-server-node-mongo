import mongoose from 'mongoose';
import { countriesModelName } from '../constans';

export default mongoose.model(countriesModelName, {
  country: String,
  cities: Array,
  bg_image: String,
  title: String,
  about: Array	
});