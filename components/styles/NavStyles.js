import styled, { keyframes } from 'styled-components';

/* TODO: Style buttons better on large nav with animation */

const StyledNav = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 75%;
  a {
    text-shadow: default;
    transition: all 0.2s ease-in;
  }
  a:hover {
    text-shadow: 0 0 16px white;
    transition: all 0.2s ease-in;
  }
  & > * {
    display: flex;
    flex-direction: column;
    text-align: center;
    font-size: 2.5rem;
    background: ${props => props.theme.black};
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
  @media (max-width: 1000px) {
    align-items: center;
    padding: 10px;
    justify-content: center;
    flex-direction: column;
    .aboutLink {
      padding: 5px 25px;
    }
  }
`;

const GalleryNav = styled.div`
  margin: 0 0 20px 0;
  .gallerySpan {
    background: ${props => props.theme.lightGray};
    pointer-events: none;
  }
  @media (max-width: 1000px) {
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
    width: 100%;
    max-width: 475px;
    *,
    & + * {
      padding: 0.4rem;
    }
  }
`;

const IconContainer = styled.div`
  background: none;
  border: none;
  
  .linksContainer {
  display: flex;
  flex-direction: row;
  align-self: center;
  
}
  a {
    img {
      width: 10rem;
      padding: 2rem;
    }
  }
`

export { StyledNav, GalleryNav, IconContainer };
