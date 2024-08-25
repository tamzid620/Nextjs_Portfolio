"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner";
import MySkills from "./Components/MySkills/MySkills";
import MyEmail from "./Components/MyEmail/MyEmail";
import HomeDescription from "./Components/HomeDescription/HomeDescription";
import AboutMe from "./Components/AboutMe/AboutMe";

const ParticlesBg = dynamic(() => import("particles-bg"), { ssr: false });

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="">
      <ParticlesBg num={80} type="cobweb" bg={true} />
    <div className="pt-[75px] lg:px-[70px] sm: px-[20px] mx-auto">
      <Banner href="#banner" />
    </div>
      <div className="pt-[75px] lg:px-[70px] sm: px-[20px] mx-auto bg-white">
        <HomeDescription />
        <MySkills href="#mySkills" />
        <AboutMe href="#about" />
        <MyEmail href="#contact" />
      </div>
    </div>
  );
};

export default Home;
