import * as graphql from 'graphql';
import City from '../mongo/city.model';
import Country from '../mongo/country.model';
import { CityType } from './types/city.type';
import CountryType from './types/country.type';
import { inputDescriptionType } from './types/city.type';

const query = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    getAllCities: {
      type: graphql.GraphQLList(CityType),
      resolve: (root, args, context, info) => {
          return City.find({}).exec();
      }
    },
    getCityByName: {
      type: CityType,
      args: {
        cityName: { type: graphql.GraphQLString }
      },
      resolve: (root, args, context, info) => {
          return City.findOne({name: new RegExp(args.cityName, 'i')}).exec();
      }
    },
    getAllCountries: {
      type: graphql.GraphQLList(CountryType),
      resolve: (root, args, context, info) => {
          return Country.find({}).exec();
      }
    },
    getCountriesByName: {
      type: graphql.GraphQLList(CountryType),
      args: {
        countryName: { type: graphql.GraphQLString }
      },
      resolve: (root, args, context, info) => {
          return Country.find({country: new RegExp(args.countryName, 'i')}).exec();
      }
    },
    getCountryByName: {
      type: CountryType,
      args: {
        countryName: { type: graphql.GraphQLString }
      },
      resolve: (root, args, context, info) => {
          return Country.findOne({country: new RegExp(args.countryName, 'i')}).exec();
      }
    }
  }
});

const mutation = new graphql.GraphQLObjectType({
  name: "Mutation",
  fields: {      
    addCountry: {
      type: CountryType,
      args: {
        country: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
        cities: { type: graphql.GraphQLList(graphql.GraphQLString) },
        bg_image: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
        title: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
        about: { type: graphql.GraphQLNonNull(graphql.GraphQLList(inputDescriptionType)) }
      },
      resolve: (root, args, context, info) => {
          const country = new Country(args);
          return country.save();
      }
    }
  }
})

export default new graphql.GraphQLSchema({
  query,
  mutation
});
