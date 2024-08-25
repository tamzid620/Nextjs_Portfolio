"use client" ;
import Image from "next/image";
import React, { useEffect, useState } from "react";
// import { IoIosArrowDropupCircle } from "react-icons/io";
import { PiArrowFatLineUpFill  } from "react-icons/pi";
import logo from "@/assests/icon/svgicon.png";
import Link from "next/link";
import "./Navbar.css"
import  menuLogo from '@/assests/icon/menu.png'

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false) ;

  const navLists = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "#mySkills",
      title: "Skills",
    },
    {
      path: "",
      title: "Projects",
    },
    {
      path: "",
      title: "About",
    },
    {
      path: "#contact",
      title: "Contact",
    },
  ];

  // Handle Route section ---------------------------------
  const handleRouteClick = ( e, path ) => {
    e.preventDefault();
    const targetElement = document.querySelector(path);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="relative">
    <nav className="flex justify-between items-center 
    fixed z-10 py-5 w-full md:px-[65px] sm: ps-[18px] sm: pe-[25px]
     bg-purple-900  shadow-md shadow-gray-800">
      {/* Logo part */}
      <Link href="/">
      <div className="flex items-center gap-1">
        <Image src={logo} alt="portfolio logo" className="w-[35px]" />
        <h1 className="text-2xl font-bold uppercase text-purple-300">
          <span className="text-white">Tam</span>
          <span>zid</span>
        </h1>
      </div>
      </Link>

      {/* Navlist part for  large & medium device */}
      <div>
        <ul className="lg:flex md:flex sm: hidden gap-5 uppercase">
          {navLists.map(({ path, title }) => (
           <div key={path} className="hover-hr">
               <li onClick={(e) => handleRouteClick(e, path)} className="text-white hover:text-purple-200 transition-colors">
                 <Link href={path}>{title}</Link>
               </li>
               <div className="text-center flex justify-center">
                <hr className="border border-purple-200 bg-purple-200 h-[2px] w-[40px]" />
                </div>
           </div>
          ))}
        </ul>
        </div>
      <div onClick={handleMenu} className="lg:hidden md:hidden sm: block">
        <Image className="w-[40px]" src={menuLogo} alt=""/>
      </div>
    </nav>
      {/* Navlist part for small device */}
      <div
        className={
          `fixed z-10 bg-purple-900 mt-[75px] lg:hidden md:hidden sm:block text-center leading-[110px] gap-5 uppercase w-full h-screen transition-transform duration-300 
          ${ menuOpen ? "transform translate-y-0" : "transform translate-x-full"}`
        }
      >
        <ul className="">
          {navLists.map(({ path, title }) => (
           <div key={path} className="hover-hr">
               <li onClick={(e) => handleRouteClick(e, path)} className="text-white hover:text-purple-200 transition-colors">
                 <Link href={path}>{title}</Link>
               </li>
               <div className="text-start">
                <hr className="border border-purple-200 bg-purple-200 h-[2px] w-[40px]" />
                </div>
           </div>
          ))}
        </ul>
      </div>
    {/* go top button  */}
    {isVisible && (
        <div 
        onClick={scrollToTop}
        title="slide button"
        className="fixed bottom-4 right-4 bg-purple-900 
        flex items-center justify-center
        shadow-lg shadow-purple-800
         rounded-full w-[40px] h-[40px] border-2 border-black z-50"
        >
          <PiArrowFatLineUpFill  className="text-purple-200 hover:text-white" size={30} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
