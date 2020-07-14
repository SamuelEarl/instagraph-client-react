import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import { typeDefs, defaultState, resolvers } from '@/graphql/client/schema';
import Routes from './routes';
import { auth } from '@/init-firebase.js';
import './index.global.scss';
import 'typeface-open-sans';
import * as serviceWorker from './serviceWorker';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    // headers: { authorization: localStorage.getItem('sessionId') },
    uri: 'http://localhost:8080/graphql',
  }),
  typeDefs,
  resolvers
});

cache.writeData({
  data: defaultState
});

console.log("DEFAULT STATE:", defaultState);
console.log("APOLLO CACHE:", cache);

// let app;
// auth.onAuthStateChanged((user) => {
//   if (!app) {
//     app = ReactDOM.render(
//       <React.StrictMode>
//         <ApolloProvider client={client}>
//           <Routes />
//         </ApolloProvider>
//       </React.StrictMode>,
//       document.getElementById('root')
//     );
//   }

//   // If the user is logged in, then fetch their profile data and save it to the Apollo Cache
//   if (user) {
//     const { data } = useQuery(GET_USER_BY_USER_ID, {
//       variables: {
//         id: user.uid
//       }
//     });
//     cache.writeData({
//       data: {
//         user: data.user,
//         // user: {
//         //   id: data.id,
//         //   firstName: data.firstName,
//         //   lastName: data.lastName,
//         //   email: data.email,
//         // },
//         isAuthenticated: true
//       }
//     });
//   }
// });

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
