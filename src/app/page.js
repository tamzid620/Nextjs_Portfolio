"use client" ;
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import Banner from './Components/Banner/Banner';
import MySkills from './Components/MySkills/MySkills';
import MyEmail from './Components/MyEmail/MyEmail';
import HomeDescription from './Components/HomeDescription/HomeDescription';

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
    <div className='pt-[75px] max-w-6xl sm: px-[20px] mx-auto'>
      <ParticlesBg num={80} type="cobweb" bg={true} />
      <Banner/>
      <HomeDescription/>
      <MySkills href="#mySkills"/>
      <MyEmail href = "#contact"/>
    </div>
  );
};

export default Home;
