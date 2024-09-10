import React from "react";
import "./AboutMe.css";
import { Nunito_Sans } from "next/font/google";
import { Arsenal } from "next/font/google";
import Image from "next/image";
import img from "@/assests/image/erasePhoto.png";
import Link from "next/link";
import Aos from "aos";
import "aos/dist/aos.css";

const nunito = Nunito_Sans({
  weight: ["400", "600"],
  subsets: ["latin"],
});
const arsenal = Arsenal({
  weight: "400",
  subsets: ["latin"],
});

const AboutMe = () => {

  Aos.init();

  const navigation = [
    {
      path: "#contact",
      title: "Hire Me",
    }
  ];

  return (
    <div id="about" className="py-14">
      <h2
        className={`${arsenal.className} text-4xl text-purple-800 uppercase flex justify-center mb-5`}
      >
        About Me
      </h2>
      <hr className="border-[1px] border-purple-800" />
      {/* ----------------flex div------------------  */}
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 md:gap-12 sm: gap-5 items-center justify-center pt-[40px] ">
        {/* image div  */}
        <div className="relative">
          <div className="relative">
              <Image className="card-image rounded-md" src={img} alt="" />
            <p
            data-aos="fade-right" data-aos-offset="100"
            className="absolute sectionFiterimg top-[0px] left-[0px] md:mt-[40px] md:ml-[0px] sm: mt-[0px] sm: ml-[0px]
            w-[180px] p-5 bg-white rounded-md font-bold 
            flex justify-center items-center gap-5">
              <span className="text-5xl text-purple-800">02</span>
              <span className="text-lgl">
                Years of <br /> Success
              </span>
            </p>
            <p 
            data-aos="fade-left" data-aos-offset="100"
            className="absolute sectionFiterimg bottom-[0px] right-[0px] md:mb-[50px] md:-mr-[25px] sm: mb-[50px] sm: mr-[0px]
             w-[180px] p-5 bg-white rounded-md font-bold 
             flex justify-center items-center gap-5">
              <span className="text-5xl text-green-500">74</span>
              <span className="text-lgl">Total Projects</span>
            </p>
          </div>
        </div>
        {/* discription div  */}
        <div>
          <h1 className="font-bold text-xl text-purple-800 mb-2">
            I’m a Developer
          </h1>
          <h2 className="font-bold text-3xl mb-3 text-black">
            I Can Develope Anything <br /> You Want
          </h2>
          <p className="leading-8 text-lg text-gray-500">
            Hello! I’m a web developer with 2 years of experience, specializing
            in creating dynamic and user-friendly websites. My expertise spans
            HTML, CSS, Next.js, React.js, JavaScript, Express.js, and MongoDB.
            I’m passionate and dedicated to every step of the design process,
            from initial discussion to final execution. Let’s make your project
            a success together!
          </p>
          
          {navigation.map(({ path, title }) => (
           <div key={path} >
                 <Link href={path}>
                 <button
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="100"
              className="w-[85px] px-[0px] py-[5px] rounded-sm text-white mt-3
              bg-gradient-to-t from-indigo-900 to-purple-500
              shadow-lg shadow-purple-900
               hover:from-purple-500 hover:to-indigo-900"
            >
              {title}
            </button>
                 </Link>
           </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
