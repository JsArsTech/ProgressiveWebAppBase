import React, { Component } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Profile from './Profile';
import Header from '../components/header/Header';
import logo from '../logo.svg';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 
    "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", 
    "Helvetica Neue", sans-serif;
    --webkit-font-smoothing: antialised;
    --moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

class App extends Component 
{
  render() {
    return ( 
      <>
        <GlobalStyle />
        <AppWrapper>
          <Header />
          <Profile />
        </AppWrapper>      
      </>
    );
  }
}

export default App;
