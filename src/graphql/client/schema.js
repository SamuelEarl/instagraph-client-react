// This is the client-side state. This is like the `state` object in Vuex - it defines the data that are available on the client.
// Since queries (i.e. the fields in the Query object) execute as soon as a component mounts, it is important to provide default values / default state for each of the queries, otherwise the queries could cause errors. The default state is set in the `@src/index.js` file where ApolloClient is defined.

import gql from 'graphql-tag';

export const typeDefs = gql`
  extend type Query {
    user: User
    isAuthenticated: Boolean!
  }

# TODO: I need to figure out why the user I can't find the userObj on the data property after I sign in. I see a user object inside the ROOT_QUERY and I see a User object outside of the ROOT_QUERY, but they don't really match up. I think I need to define the User object here, but I am still a little fuzzy on how the local (client-side) state works. I need to read this page again: https://www.apollographql.com/docs/tutorial/local-state/ and come back to the sign-in flow and storing the user object in the cache.

  extend type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
  }
`;

// --------------------------------------------------------------------------------
// Default state values
// --------------------------------------------------------------------------------
// The default values for client-side queries (i.e. getters) go here.
// https://www.apollographql.com/docs/tutorial/local-state/#initialize-the-store
export const defaultState = {
  user: null,
  isAuthenticated: false,
};


// Should I also put the client-side Queries and Mutations in this file or should I break those up into their own modules?
// Since resolvers are related, but different from Queries or Mutations, I should probably put any client-side resolvers in this file.
// Since the `@/src/graphql/api.js` file contains server-side Queries and Mutations and the modules in the `@/src/store/modules/` directory contains client-side Queries and Mutations, I should keep those separate and figure out how to name them in a way that clearly identifies what is in each file.


// --------------------------------------------------------------------------------
// Resolvers
// --------------------------------------------------------------------------------
export const resolvers = {};
