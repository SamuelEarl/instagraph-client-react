import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider, useQuery } from "@apollo/react-hooks";
import { typeDefs, defaultState, resolvers } from '@/graphql/client/schema';
import App from './App.js';
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


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
