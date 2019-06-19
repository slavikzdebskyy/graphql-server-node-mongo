import * as graphql from 'graphql';
import { DescriptionType } from './city.type';

export default new graphql.GraphQLObjectType({
  name: 'Country',
  fields: {
    country: { type: graphql.GraphQLString },
    cities: {type: graphql.GraphQLList(graphql.GraphQLString)},
    bg_image: { type: graphql.GraphQLString },
    title: { type: graphql.GraphQLString },
    about: {type: graphql.GraphQLList(DescriptionType)}
  }
});