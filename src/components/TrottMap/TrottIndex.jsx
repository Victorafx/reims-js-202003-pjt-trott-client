import React from 'react';
import { useLocation } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';

import MyCity from './MyCity';

import './trott.css';
import MyMapTwo from './MyMapTwo';
import TrottNavMap from '../TrottMapNav/TrottNavMap';

const client = new ApolloClient({
  uri: 'https://flow-api.fluctuo.com/v1?access_token=g8bGqo424KsGKVRw8wxOZ7oGdWmM4lyL',
});

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function TrottIndex() {
  let query = useQuery();
  let page = parseInt(query.get("page"));
  if (isNaN(page)) {
    page = 1;
  }

  switch (page) {
    case 1:
      return (
        <MyCity />
      );
    case 2:
      return (
        <ApolloProvider client={client}>
          <TrottNavMap />
          <MyMapTwo />
        </ApolloProvider>
      );
    default:
      return (
        <div><h1>problem</h1></div>
      );
  }
}

export default TrottIndex;
