"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import Banner from "./Components/Banner/Banner";
import MySkills from "./Components/MySkills/MySkills";
import MyEmail from "./Components/MyEmail/MyEmail";
import HomeDescription from "./Components/HomeDescription/HomeDescription";
import AboutMe from "./Components/AboutMe/AboutMe";
import Projects from "./Components/Projects/Projects";

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
      <div className="pt-[75px] max-w-6xl sm: px-[20px] mx-auto">
      <ParticlesBg num={50} type="cobweb" bg={true} />
      <Banner href="#banner" />
      </div>
      <div className="max-w-6xl sm: px-[20px] mx-auto ">
        <HomeDescription />
        <MySkills href="#mySkills" />
        <AboutMe href="#about" />
        <Projects href="#projects"/>
        <MyEmail href="#contact" />
      </div>
    </div>
  );
};

export default Home;
