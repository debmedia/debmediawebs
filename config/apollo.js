import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import { WP_GQL_API_BASE_URL } from "../constants/urls";

export const apolloClient = new ApolloClient({
    uri: WP_GQL_API_BASE_URL,
    cache: new InMemoryCache(),
});
