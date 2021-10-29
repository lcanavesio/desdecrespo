import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://www.desdecrespo.com.ar/graphql',
    fetch,
  }),
  cache: new InMemoryCache(),
});
