import React from 'react';
import NavbarSigned from '../components/NavbarSigned';
import Hero2 from '../components/home/Hero2';
import Announcement from '../components/home/Highlights';
import Highlights from '../components/home/Announcement';

function HomeSigned() {
  return (
    <div>
      <NavbarSigned />
      <Hero2 />
      {/* <Highlights />
      <Announcement /> */}
    </div>
  )
}

export default HomeSigned
