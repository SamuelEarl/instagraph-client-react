import gql from 'graphql-tag';

// --------------------------------------------------------------------------------
// Queries (i.e. Getters)
// --------------------------------------------------------------------------------
export const GET_CURRENT_USER = gql`
  query GetCurrentUser {
    user @client {
      id @client
      firstName @client
      lastName @client
      email @client
    }
  }
`;

export const IS_AUTHENTICATED = gql`
  query IsUserAuthenticated {
    isAuthenticated @client
  }
`;


// --------------------------------------------------------------------------------
// Mutations (i.e. Setters)
// --------------------------------------------------------------------------------
