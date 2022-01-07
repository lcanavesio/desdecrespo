import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import fetch from 'cross-fetch';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://admin.desdecrespo.com.ar/graphql',
    fetch,
  }),
  cache: new InMemoryCache(),
});
