import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import { StyledGallery, GalleryHeader } from './styles/GalleryStyles';
import Carousel, { Modal, ModalGateway } from "react-images";

import { studioPhotos } from '../photos';

export const Studio = () => {

  const [currentImage, setCurrentImage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = useCallback(({ index }) => {
    setCurrentImage(index);
    setModalOpen(true);
  }, []);

  const closeModal = () => {
    setCurrentImage(0);
    setModalOpen(false);
  };
  return (
      <StyledGallery>
        <GalleryHeader>
          <span>Studio</span>
        </GalleryHeader>
        <Gallery photos={studioPhotos} margin={15} role="img" onClick={openModal} />
        <ModalGateway >
        {modalOpen ? (
          <Modal onClose={closeModal} allowFullscreen={false}
          >
            <Carousel
              styles={{
                container: base => ({
                    ...base,
                    height: '100vh',
                  }),
                  view: base => ({
                    ...base,
                    alignItems: 'center',
                    display: 'flex ',
                    height: 'calc(100vh - 54px)',
                    justifyContent: 'center',

                    '& > img': {
                      maxHeight: 'calc(100vh - 94px)',
                    },
                  }),
              }}
              currentIndex={currentImage}
              views={studioPhotos.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
        </ModalGateway>  
      </StyledGallery>
    );
  }