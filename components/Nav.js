import Link from 'next/link';
import { StyledNav, GalleryNav } from './styles/NavStyles';

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
  </StyledNav>
);

export default Nav;
