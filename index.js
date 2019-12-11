const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql `
#this is a comment inside the graphql string
type Book {
    title: String
    author: String
}

type Query {
    books: [Book]
}
`

const books = [
    {
        title: 'Harry Potter and the chamber of Secrets',
        author: 'J.K. Rowling'
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton'
    }
];

const resolvers = {
    Query: {
        books: () => books
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Apollo Server ready at ${url}`)
});