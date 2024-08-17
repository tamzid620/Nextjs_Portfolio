import Image from "next/image";
import React from "react";
import logo from "@/assests/icon/svgicon.png";
import Link from "next/link";
import "./Navbar.css"

const Navbar = () => {
  const navLists = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/",
      title: "Skills",
    },
    {
      path: "/",
      title: "Projects",
    },
    {
      path: "/",
      title: "About",
    },
    {
      path: "/",
      title: "Contact",
    },
  ];

  return (
    <nav className="flex justify-between items-center fixed z-10 bg-gray-300 opacity-90 py-5 w-full px-16">
      {/* Logo part */}
      <div className="flex items-center gap-1">
        <Image src={logo} alt="portfolio logo" className="w-[35px]" />
        <h1 className="text-2xl font-bold uppercase text-sky-500">
          <span className="text-black">Tam</span>
          <span>zid</span>
        </h1>
      </div>

      {/* Navlist part */}
      <div>
        <ul className="flex gap-5 uppercase">
          {navLists.map(({ path, title }) => (
           <div key={path} className="hover-hr">
               <li className="hover:text-sky-300 transition-colors">
                 <Link href={path}>{title}</Link>
               </li>
               <div className="text-center flex justify-center">
                <hr className="border border-sky-500 bg-sky-500 h-[2px] w-[40px]" />
                </div>
           </div>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
