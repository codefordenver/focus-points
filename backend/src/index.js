const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');

const resolvers = {
  Query: {
    user: (_, args, context, info) => {
      
    }
  },
  Mutation: {
    createUser: (_, args, context, info) => {
      return context.prisma.mutation.createUser(
        {
          data: {
            ...args 
          },
        },
        info,
      )
    },
  }
}

const server = new GraphQLServer({
  typeDefs: './schema.graphql',
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: './generated/prisma.graphql',
      endpoint: 'http://localhost:4466',
    }),
  }),
})
server.start(() => console.log(`GraphQL server is running on http://localhost:4000`))