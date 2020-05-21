import Link from 'next/link';
import { StyledNav, GalleryNav, IconContainer } from './styles/NavStyles';



const Nav = () => (
  <StyledNav role="navigation">
    <GalleryNav>
      <Link href="/">
        <span className="gallerySpan">Gallery</span>
      </Link>
      <Link href="/bhutan">
        <a>Bhutan</a>
      </Link>
      <Link href="/studio">
        <a>Studio</a>
      </Link>
      <Link href="/columbarium">
        <a>Columbarium</a>
      </Link>
    </GalleryNav>

    <Link href="/about">
      <a className="aboutLink">About</a>
    </Link>

    <IconContainer>
      <div className="linksContainer">
        <a href="https://www.instagram.com/folckphoto/">
         <img src="/instagramLogo.png" alt="Instagram Logo"/>
        </a>
        <a href="https://www.flickr.com/photos/69189093@N07/albums">
         <img src="/flickrLogo.png" alt="Flickr Logo"/>
        </a>
      </div>
    </IconContainer>
  </StyledNav>
);

export default Nav;
