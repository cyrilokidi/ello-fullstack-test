import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const apolloClient = new ApolloClient({
    uri: 'http://localhost:4000', // Replace with your GraphQL server URL
    cache: new InMemoryCache()
});

export default apolloClient;