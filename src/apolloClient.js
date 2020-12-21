import { ApolloClient, InMemoryCache } from '@apollo/client';

const grapqhlExtension = '';
const apiPublicUrl = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'http://localhost:8080'

const apolloClient = new ApolloClient({
    uri: `${apiPublicUrl}${grapqhlExtension}`,
    cache: new InMemoryCache(),
});

export { apolloClient }
