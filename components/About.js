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
  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
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
          <p>
            Bruce Folck is based in Oakland, California and has been taking
            photographs all of his life. He regularly shows his work at the
            Photo Central Gallery in Hayward.
          </p>
          <p>
            He proclaims he is stubborn in his continued use of film, and he
            prints his black and white images in the darkroom using traditional
            chemicals.
          </p>
          <p>
            Featured here are selections ranging from his time spent in Bhutan
            to a variety of studio works.
          </p>
          <a href="https://www.flickr.com/photos/69189093@N07/albums">Flickr</a>
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
