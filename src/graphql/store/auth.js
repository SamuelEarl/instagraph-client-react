import { gql } from 'apollo-boost';


// --------------------------------------------------------------------------------
// Default state values
// --------------------------------------------------------------------------------
// The default values for client-side queries (i.e. getters) go here.
// The client-side schema is in the "@/graphql/schema.js" file.
// https://www.apollographql.com/docs/tutorial/local-state/#initialize-the-store
export const authState = {
  authenticated: false,
};


// --------------------------------------------------------------------------------
// Queries (i.e. Getters)
// --------------------------------------------------------------------------------
export const AUTHENTICATED = gql`
  query IsUserAuthenticated {
    authenticated @client
  }
`;


// --------------------------------------------------------------------------------
// Mutations (i.e. Setters)
// --------------------------------------------------------------------------------
