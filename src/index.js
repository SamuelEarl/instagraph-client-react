import React from 'react';
import ReactDOM from 'react-dom';
import { createClient, Provider } from 'urql';
// import ApolloClient from 'apollo-boost';
// import { ApolloProvider } from '@apollo/react-hooks';
import 'typeface-open-sans';
import { schema } from '@/graphql/schema';
import { resolvers } from '@/graphql/resolvers';
// import defaultState from '@/graphql/store';
import Router from './router';
import './index.global.scss';
import * as serviceWorker from './serviceWorker';

// const client = new ApolloClient({
//   // cache,
//   uri: 'http://localhost:8080/graphql',
//   schema,
//   resolvers
// });
// cache.writeData({
//   data: defaultState
// });

const client = createClient({
  url: 'http://localhost:8080/graphql',
  // Optional fetch options: https://formidable.com/open-source/urql/docs/basics/getting-started/
  // fetchOptions: () => {
  //   const token = getToken();
  //   return {
  //     headers: { authorization: token ? `Bearer ${token}` : '' },
  //   };
  // },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider value={client}>
      <Router />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
