// import gql from 'graphql-tag';

// // --------------------------------------------------------------------------------
// // Queries (i.e. Getters)
// // --------------------------------------------------------------------------------
// export const AUTHENTICATED = gql`
//   query IsUserAuthenticated {
//     authenticated @client
//   }
// `;


// --------------------------------------------------------------------------------
// Mutations (i.e. Setters)
// Mutations are essentially setters. There are two types of client-side setters:
// (1) Direct cache writes. Direct cache writes are typically used to write simple booleans or strings to the cache. These use the `client.writeData()` method.
// (2) Client resolvers. Client resolvers are for more complicated writes such as adding or removing data from a list.
// https://www.apollographql.com/docs/tutorial/local-state/#update-local-data
// --------------------------------------------------------------------------------
