import * as graphql from 'graphql';

const DescriptionType = new graphql.GraphQLObjectType({
  name: 'Description',
  fields: {
    title: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLString }
  }
});

const inputDescriptionType = new graphql.GraphQLInputObjectType({
  name: 'inputDescriptionType',
  fields: {
    title: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLString }
  }
})

const MustVisitType = new graphql.GraphQLObjectType({
  name: 'MustVisit',
  fields: {
    title: { type: graphql.GraphQLString },
    description: { type: graphql.GraphQLString },
    image: { type: graphql.GraphQLString }
  }
});

const CityType = new graphql.GraphQLObjectType({
  name: 'City',
  fields: {
    name: { type: graphql.GraphQLString },
    bg_image: { type: graphql.GraphQLString },
    country: { type: graphql.GraphQLString },
    title: { type: graphql.GraphQLString },
    description: {type: graphql.GraphQLList(DescriptionType)},
    mustVisit: {type: graphql.GraphQLList(MustVisitType)}
  }
});

export {
  DescriptionType,
  CityType,
  inputDescriptionType
}