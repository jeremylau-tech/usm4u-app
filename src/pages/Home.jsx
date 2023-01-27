import React from 'react';
import Hero from '../components/home/Hero';
import Announcement from '../components/home/Highlights';
import Highlights from '../components/home/Announcement';

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
