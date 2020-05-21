import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import { StyledGallery, GalleryHeader } from './styles/GalleryStyles';
import Carousel, { Modal, ModalGateway } from "react-images";
import { bhutanPhotos } from '../photos';

export const Bhutan = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = useCallback((e, { photo, index }) => {
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
          <span>Bhutan</span>
          <span>2015</span>
        </GalleryHeader>
        <Gallery photos={bhutanPhotos} margin={15} role="img" onClick={openModal}/>
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
              views={bhutanPhotos.map(x => ({
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
