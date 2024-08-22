"use client" ;
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Banner from './Components/Banner/Banner';
import MySkills from './Components/MySkills/MySkills';
import MyEmail from './Components/MyEmail/MyEmail';

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
    <div className='pt-[75px] max-w-6xl mx-auto'>
      <ParticlesBg num={80} type="cobweb" bg={true} />
      <Banner/>
      <MySkills/>
      <MyEmail/>
    </div>
  );
};

export default Home;
