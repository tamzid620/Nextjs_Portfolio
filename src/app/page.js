"use client" ;
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ParticlesBg = dynamic(() => import('particles-bg'), { ssr: false });

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className='pt-[75px] '>
      {/* <ParticlesBg num={200} type="cobweb" bg={true} /> */}
      <h1>Home</h1>
    </div>
  );
};

export default Home;
