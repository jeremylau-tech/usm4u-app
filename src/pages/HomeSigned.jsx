import React from 'react';
import NavbarSigned from '../components/NavbarSigned';
import Hero from '../components/home/Hero';
import Announcement from '../components/home/Highlights';
import Highlights from '../components/home/Announcement';

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
