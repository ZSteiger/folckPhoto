import styled from 'styled-components';

const StyledGallery = styled.div`
  height: 100vh;
  max-width: 100%;
  padding: 0 15px;
  overflow-y: scroll;
  @media (max-width: 1000px) {
    height: initial;
  }
`;

const GalleryHeader = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.3em;
  padding: 5px 5px;
  margin: 10px;
  border-bottom: 1px solid white;
`;

const GalleryNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 25px;
  font-size: 3rem;
  border-bottom: 1px solid white;
`;

export { StyledGallery, GalleryNav, GalleryHeader };
