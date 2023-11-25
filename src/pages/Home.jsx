import React from 'react';

import Hero from '../components/home/Hero';
import Announcement from '../components/home/Highlights';
import Highlights from '../components/home/Announcement';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Highlights />
      <Announcement /> */}
    </div>
  )
}

export default Home
