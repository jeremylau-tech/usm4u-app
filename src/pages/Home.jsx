import React from 'react';
import Hero from '../components/Home/Hero';
import Highlights from '../components/Home/Announcement';
import Announcement from '../components/Home/Highlights';

function Home() {
  return (
    <div>
      <Hero />
      <Highlights />
      <Announcement />
    </div>
  )
}

export default Home
