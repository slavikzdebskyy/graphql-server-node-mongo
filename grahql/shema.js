const graphql = require('graphql');
const { queryName } = require('../constans');
const City = require('../mongo/city.model');
const Country = require('../mongo/country.model');
const { CityType } = require('./city.type');
const CountryType = require('./country.type');

module.exports = new graphql.GraphQLSchema({
  query: new graphql.GraphQLObjectType({
      name: queryName,
      fields: {
        cities: {
          type: graphql.GraphQLList(CityType),
          resolve: (root, args, context, info) => {
              return City.find({}).exec();
          }
        },
        city: {
          type: CityType,
          args: {
            cityName: { type: graphql.GraphQLString }
          },
          resolve: (root, args, context, info) => {
              return City.findOne({name: new RegExp(args.cityName, 'i')}).exec();
          }
        },
        countries: {
          type: graphql.GraphQLList(CountryType),
          resolve: (root, args, context, info) => {
              return Country.find({}).exec();
          }
        },
        countriesByName: {
          type: graphql.GraphQLList(CountryType),
          args: {
            countryName: { type: graphql.GraphQLString }
          },
          resolve: (root, args, context, info) => {
              return Country.find({country: new RegExp(args.countryName, 'i')}).exec();
          }
        },
        country: {
          type: CountryType,
          args: {
            countryName: { type: graphql.GraphQLString }
          },
          resolve: (root, args, context, info) => {
              return City.findOne({country: new RegExp(args.countryName, 'i')}).exec();
          }
        }
      }
  })
});