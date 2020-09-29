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
          Bruce is on display at: <br />
          Art Truckee Gallery <br />
          10072 Donner Pass Rd / 2nd floor <br /> 
          Truckee, CA  96161 <br />
          October 2020 - February 2021 
          </sub>
        </Welcome>
      </SplashContainer>
    );
  }
}

export default Splash;
