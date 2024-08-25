import React from 'react';
import './AboutMe.css'
import { Nunito_Sans } from "next/font/google";
import { Arsenal } from "next/font/google";
import Image from 'next/image';
import img from "@/assests/image/software-developer-6521720_1280.png"


const nunito = Nunito_Sans({ 
    weight: ["400","600"],
    subsets: ["latin"] 
});
const arsenal = Arsenal({
  weight: "400",
  subsets: ["latin"],
});

const AboutMe = () => {
    return (
        <div id="about" className='py-14 bg-white'>
                 <h2
        
        className={`${arsenal.className} text-4xl text-purple-800 uppercase flex justify-center mb-5`}
      >
        About Me
      </h2>
      <hr className="border-[1px] border-purple-800" />
      {/* ----------------flex div------------------  */}
      <div className='grid lg:grid-cols-2 md:grid-cols-2 sm: grid-cols-1 gap-5 items-center justify-center pt-[40px] '>
        {/* image div  */}
        <div className='img-zoom rounded-md'>
        <figure className="img-zoom-effect">
            <Image className='card-image rounded-md' src={img} alt=''/>
        </figure>
        </div>
        {/* discription div  */}
        <div>
            <h1 className='font-bold text-xl text-purple-800 mb-2'>I’m a Developer</h1>
            <h2 className='font-bold text-3xl mb-3 text-black'>I Can Develope Anything <br /> You Want</h2>
            <p className='leading-8 text-lg text-gray-500'>Hello! I’m a web developer with 2 years of experience, specializing in creating dynamic and user-friendly websites. My expertise spans HTML, CSS, Next.js, React.js, JavaScript, Express.js, and MongoDB. I’m passionate and dedicated to every step of the design process, from initial discussion to final execution. Let’s make your project a success together!</p>
        </div>
      </div>
        </div>
    );
};

export default AboutMe;