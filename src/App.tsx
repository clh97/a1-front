import React from 'react';
import { ApolloProvider } from '@apollo/client';
import styled from 'styled-components';

import client from './utils/apollo';

import Home from './pages/home'

function App() {
  return (
    <ApolloProvider client={client}>
      <Main>
        <Home />
      </Main>
    </ApolloProvider>
  );
}

const Main = styled.main`
  width: 100%;
  padding: 1rem;
`;

export default App;
