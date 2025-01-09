const typeDefs = `#graphql
    type Query {
        greet: String
}`

const resolver = {
    Query : {
        greeting: () => 'Hello',
    }
}