import { ApolloClient, InMemoryCache, ApolloProvider, gql } from "@apollo/client";
import { WP_GQL_API_BASE_URL } from "../constants/urls";

const headers = {};
if(process.env.CONTEXT !== "production") {
  // Si no estamos en prod ponemos las credenciales de wp para ver los draft
  const KEY = btoa(`${process.env.WP_USER}:${process.env.WP_PASS}`);
  headers.authorization = `basic ${KEY}`
};

export const apolloClient = new ApolloClient({
    uri: WP_GQL_API_BASE_URL,
    cache: new InMemoryCache(),
    headers
});
