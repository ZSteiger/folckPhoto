import React, { Component } from 'react';
import styled from 'styled-components';

const AboutDiv = styled.div`
  display: grid;
  padding: 10px 25px;
  grid-template-columns: 1fr 400px;
  grid-gap: 20px;
  img {
    width: auto;
    margin: auto;
    max-width: 400px;
    height: auto;
  }
  span {
    font-size: 1.5rem;
    text-align: center;
  }
`;

const Blurb = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  font-size: 1.3em;
  a {
    text-decoration: underline;
  }
`;

class About extends Component {
  render() {
    return (
      <AboutDiv>
        <Blurb>
          <p>I am a freelance photographer based out of Oakland, CA. </p>
          <p>
            If you are interested in ordering prints, hiring my services, or
            modeling,{' '}
            <a href="mailto:bff_bluedragon@hotmail.com">please contact me.</a>
          </p>
          <a href="https://www.flickr.com/photos/folckphoto/">Flickr</a>
        </Blurb>
        <img src="../static/Bruce.jpg" alt="Bruce's Headshot" />
        <span>
          All Images Strictly Copyrighted by Bruce Folck, and may not be copied
          or reproduced in any way without the express permission of the
          photographer.
        </span>
      </AboutDiv>
    );
  }
}

export default About;
