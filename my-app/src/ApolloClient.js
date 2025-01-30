import { ApolloClient, InMemoryCache } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

export const createApolloClient = (uri) => {
  const restLink = new RestLink({ uri });

  return new ApolloClient({
    link: restLink,
    cache: new InMemoryCache(),
  });
};