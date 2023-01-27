import React from 'react';

import Hero from '../components/Home/Hero';
import Announcement from '../components/Home/Highlights';
import Highlights from '../components/Home/Announcement';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Highlights />
      <Announcement />
    </div>
  )
}

export default Home
