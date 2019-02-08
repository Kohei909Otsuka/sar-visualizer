import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './logo.svg';

const StyledApp = styled.div`
  text-align: center;
`;

const StyledHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;
const HeaderImage = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
`;
const HeaderLink = styled.a`
  color: #61dafb;
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <HeaderImage src={logo} alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <HeaderLink
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </HeaderLink>
    </StyledHeader>
  );
};

class App extends Component {
  render() {
    return (
      <StyledApp>
        <Header>
        </Header>
      </StyledApp>
    );
  }
}

export default App;
