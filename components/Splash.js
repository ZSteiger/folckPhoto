import React, { Component } from 'react';
import styled from 'styled-components';

const SplashImage = styled.img`
  width: 100%;
`;

const Welcome = styled.div`
  background: ${props => props.theme.black};
  padding: 0 10px;
  position: absolute;
  top: 4%;
  right: 10%;
  text-align: center;
  font-size: 1.5em;
  line-height: initial;
  border: 1px solid ${props => props.theme.white};

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
      <SplashContainer>
        <SplashImage
          src="static/Clay waterfall.jpg"
          alt="Clay Waterfall Splash"
        />
        <Welcome>
          <p>
            Welcome to Folck Photo, <br /> Please Select a Gallery
          </p>
        </Welcome>
      </SplashContainer>
    );
  }
}

export default Splash;
