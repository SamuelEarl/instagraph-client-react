import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { ApolloProvider } from "@apollo/react-hooks";
import { typeDefs, defaultState, resolvers } from '@/graphql/client/schema';
import Routes from './routes';
import './index.global.scss';
import 'typeface-open-sans';
import * as serviceWorker from './serviceWorker';

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    // headers: { authorization: localStorage.getItem('token') },
    uri: 'http://localhost:8080/graphql',
  }),
  typeDefs,
  resolvers
});

cache.writeData({
  data: defaultState
  // data: {
  //   isLoggedIn: !!localStorage.getItem('token'),
  //   cartItems: [],
  // },
});

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
