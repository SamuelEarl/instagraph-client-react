// This is the client-side state. This is where you can add client-side queries, mutations and virtual fields by extending the Query, Mutation and other object types from your server-side schema.

import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    isAuthenticated: Boolean!
  }
`;

// --------------------------------------------------------------------------------
// Default state values
// --------------------------------------------------------------------------------
// Since client-side queries (i.e. the fields in the client-side schema’s Query object) execute as
// soon as the app mounts, it is important to provide default state for each of the client-side
// queries, otherwise the queries could cause errors if they return `undefined`. The default state
// is set in the `@src/index.js` file where ApolloClient is defined.
// https://www.apollographql.com/docs/tutorial/local-state/#initialize-the-store
export const defaultState = {
  isAuthenticated: !!localStorage.getItem("sessionId"),
};


// --------------------------------------------------------------------------------
// Resolvers
// --------------------------------------------------------------------------------
export const resolvers = {};
