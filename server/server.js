import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = `#graphql
    type Query {
        greeting: String
}
`;

const resolvers = {
    Query : {
        greeting: () => 'Hello World',
    },
};

const server = new ApolloServer({typeDefs, resolvers});
const {url} = await startStandaloneServer(server, { listen: { port : 8088 }});  
console.log(`Server Running at ${url}`)


//How to run

/* query {
    greeting
 }

 O/P
 {
  "data": {
    "greeting": "Hello World"
  }
}
*/ 
