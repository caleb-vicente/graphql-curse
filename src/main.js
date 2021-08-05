import { GraphQLServer } from "graphql-yoga";

//Definicion del esquema
const typeDefs = `
    type Query{
        hello: String!
    }
`

//Definicion de los resolvers
const resolvers = {
    Query: {
        hello: () => `Hello World`,
    },
}

const server = new GraphQLServer({
    typeDefs, 
    resolvers,
})

server.start(() => console.log('Server is runnin on localhost:4000'))