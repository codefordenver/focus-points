const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

const typeDefs = `
  type Post {
    description: String!
    id: ID! @unique
    imageUrl: String!
  }
  type Query {
    posts: [Post]
  }
`;

/* Test data */
const posts = [
  { id: 1, imageUrl: 1, description: 'Introduction to GraphQL' },
  { id: 2, imageUrl: 2, description: 'Welcome to Meteor' },
  { id: 3, imageUrl: 2, description: 'Advanced GraphQL' },
  { id: 4, imageUrl: 3, description: 'Launchpad is Cool' }
];

const resolvers = {
  Query: {
    posts: () => posts
  }
};

module.exports = makeExecutableSchema({
  typeDefs,
  resolvers
});
