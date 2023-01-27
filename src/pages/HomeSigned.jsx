import React from 'react';
import NavbarSigned from '../components/NavbarSigned';
import Hero from '../components/Home/Hero';
import Announcement from '../components/Home/Highlights';
import Highlights from '../components/Home/Announcement';

function HomeSigned() {
  return (
    <div>
      <NavbarSigned />
      <Hero />
      <Highlights />
      <Announcement />
    </div>
  )
}

export default HomeSigned
