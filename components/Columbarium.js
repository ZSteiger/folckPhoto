import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import styled from 'styled-components';
import { StyledGallery, GalleryHeader } from './styles/GalleryStyles';
import { columbariumPhotos } from '../photos';

class Columbarium extends Component {
  render() {
    return (
      <StyledGallery>
        <GalleryHeader>
          <span>Columbarium</span>
          <span>2017 / 2018</span>
        </GalleryHeader>
        <Gallery photos={columbariumPhotos} margin={15} />
      </StyledGallery>
    );
  }
}

export default Columbarium;
