"use client" ;
import dynamic from 'next/dynamic';
import Head from 'next/head';
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
    <main>
      <Head>
        <title>Tamzid-Portfolio || Home</title>
        <meta name="description" content="Created by Tamzid620" />
      </Head>
      <ParticlesBg num={200} type="cobweb" bg={true} />
      <h1>Home</h1>
    </main>
  );
};

export default Home;
