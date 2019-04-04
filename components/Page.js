import React, { Component } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from './Header';
import Meta from './Meta';
import GlobalStyles from './styles/GlobalStyles';
import Error from './_error';

const darkTheme = {
  black: '#111111',
  gray: '#171717',
  lightGray: '#282828',
  white: '#F3F3F3'
};

const lightTheme = {
  black: '#F3F3F3',
  gray: '#171717',
  white: '#111111'
};

const Inner = styled.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;
class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={darkTheme}>
        <>
          <GlobalStyles />
          <Meta />
          <Inner>
            <Header />
            {this.props.children}
          </Inner>
        </>
      </ThemeProvider>
    );
  }
}

export default Page;
