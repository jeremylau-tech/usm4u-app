import React from 'react';
import Hero from '../components/home/Hero';
import Highlights from '../components/home/Announcement';
import Announcement from '../components/home/Highlights';

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
