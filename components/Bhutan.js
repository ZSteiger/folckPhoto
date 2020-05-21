import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import styled from 'styled-components';
import { StyledGallery, GalleryHeader } from './styles/GalleryStyles';
import { bhutanPhotos } from '../photos';


export const Bhutan = () => {
    return (
      <StyledGallery>
        <GalleryHeader>
          <span>Bhutan</span>
          <span>2015</span>
        </GalleryHeader>
        <Gallery photos={bhutanPhotos} margin={15} role="img" onClick={openLightbox} />
      </StyledGallery>
    );
  }
