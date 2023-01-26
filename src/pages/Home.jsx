import React from 'react';
import Hero from '../components/Home/Hero';
import Announcement from '../components/Home/Highlights';
import Highlights from '../components/Home/Announcement';

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
