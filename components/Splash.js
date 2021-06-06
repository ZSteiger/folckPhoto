import React, { Component } from 'react';
import styled from 'styled-components';

const SplashImage = styled.img`
  width: 100%;
`;

const Welcome = styled.div`
  background: ${props => props.theme.black};
  position: absolute;
  padding: 2rem 3rem;
  top: 4%;
  right: 10%;
  text-align: center;
  font-size: 1.5em;
  line-height: initial;
  border: 1px solid ${props => props.theme.white};
  p {
    border-bottom: .5px solid ${props => props.theme.white};
    margin-block-start: initial;
    margin-block-end: initial;
    padding-bottom: 1rem;
  }
  sub {
    padding-bottom: 5px;
    line-height: .2rem;
    a {
      text-decoration: underline;
    }
  }
  @media (max-width: 1500px) {
    font-size: 1em;
  }
  @media (max-width: 750px) {
    font-size: 0.8em;
  }
`;

const SplashContainer = styled.div`
  position: relative;
`;

class Splash extends Component {
  render() {
    return (
      <SplashContainer role="main">
        <SplashImage
          role="img"
          src="/Clay_waterfall.jpg"
          alt="Clay Waterfall Splash"
        />
        <Welcome>
          <p>
            Welcome to Folck Photo, <br /> Please Select a Gallery
          </p>
          <sub>
          For business inquiries, <br />
          email Bruce at <br />
          <a href="mailto:bruce@folckphoto.com">bruce@folckphoto.com</a> 
          </sub>
        </Welcome>
      </SplashContainer>
    );
  }
}

export default Splash;
