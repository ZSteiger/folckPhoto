import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import styled from 'styled-components';
import { StyledGallery, GalleryHeader } from './styles/GalleryStyles';
import { studioPhotos } from '../photos';

class Studio extends Component {
  render() {
    return (
      <StyledGallery>
        <GalleryHeader>
          <span>Studio</span>
        </GalleryHeader>
        <Gallery photos={studioPhotos} margin={15} role="img" />
      </StyledGallery>
    );
  }
}

export default Studio;
