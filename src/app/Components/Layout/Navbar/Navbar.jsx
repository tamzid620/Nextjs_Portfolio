"use client" ;
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { IoIosArrowDropupCircle } from "react-icons/io";
import logo from "@/assests/icon/svgicon.png";
import Link from "next/link";
import "./Navbar.css"

const Navbar = () => {

  const [isVisible, setIsVisible] = useState(false);

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

  return (
    <div>
    <nav className="flex justify-between items-center 
    fixed z-10 py-5 w-full lg:px-16
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
        <ul className="gap-5 uppercase  lg:flex md:flex sm: hidden">
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
    </nav>
    {/* go top button  */}
    {isVisible && (
        <div 
        onClick={scrollToTop}
        title="slide button"
        className="fixed bottom-4 right-4 bg-black 
        shadow-lg shadow-gray-800
         rounded-full w-[50px] border border-gray-300 z-50"
        >
          <IoIosArrowDropupCircle className="text-purple-200 hover:text-white" size={50} />
        </div>
      )}
    </div>
  );
};

export default Navbar;
