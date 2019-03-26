import styled from 'styled-components';
import Nav from './Nav';
import { StyledHeader, Banner } from './styles/HeaderStyles';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Header = () => (
  <StyledHeader>
    <Banner>
      Bruce Folck <br /> Photography
    </Banner>
    <Nav />
  </StyledHeader>
);

export default Header;
