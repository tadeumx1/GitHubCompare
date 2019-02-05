import React, { Component } from 'react';

import styled from 'styled-components';

import GlobalStyle from './styles/global.js';

import Main from './pages/Main';

const App = () => (
  
  <div className="App">
    <GlobalStyle />
    <Main />
  </div>
  
);

export default App;