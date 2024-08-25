import './MySkills.css'
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import { Arsenal } from "next/font/google";
import Aos from "aos";
import "aos/dist/aos.css";
import html from "@/assests/icon/html.png";
import css from "@/assests/icon/css.png";
import JavaScript from "@/assests/icon/js.png";
import nextJs from "@/assests/icon/Next.js-removebg-preview.png";
import react from "@/assests/icon/react.png";
import node from "@/assests/icon/node.png";
import tailwind from "@/assests/icon/tailwind.png";
import bootstrap from "@/assests/icon/bootstrap.png";
import stripe from "@/assests/icon/stripe.png";
import mongodb from "@/assests/icon/mb.png";
import expressjs from "@/assests/icon/express.png";
import firebase from "@/assests/icon/firebase.png";
import redux from "@/assests/icon/redux.png";
import gitHub from "@/assests/icon/github.png";
import materialUi from "@/assests/icon/material ui .png";
import { useEffect } from 'react';



const nunito = Nunito_Sans({ subsets: ["latin"] });
const arsenal = Arsenal({
  weight: "400",
  subsets: ["latin"],
});

const MySkills = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const skillData = [
    {
      logo: html,
      title: "Html",
    },
    {
      logo: css,
      title: "css",
    },
    {
      logo: bootstrap,
      title: "bootstrap",
    },
    {
      logo: tailwind,
      title: "tailwind",
    },
    {
      logo: materialUi,
      title: "material Ui",
    },
    {
      logo: JavaScript,
      title: "JavaScript",
    },
    {
      logo: nextJs,
      title: "next Js",
    },
    {
      logo: react,
      title: "react Js",
    },
    {
      logo: redux,
      title: "redux",
    },
    {
      logo: node,
      title: "node Js",
    },
    {
      logo: expressjs,
      title: "express js",
    },
    {
      logo: mongodb,
      title: "mongo db",
    },
    {
      logo: stripe,
      title: "stripe",
    },
    {
      logo: firebase,
      title: "firebase",
    },
    {
      logo: gitHub,
      title: "gitHub",
    },
  ];

  return (
    <div id="mySkills" className="py-14 bg-white">
      <h2
        
        className={`${arsenal.className} text-4xl uppercase flex justify-center mb-5`}
      >
        My Skills
      </h2>
      <hr className="border-purple-900" />
      {/* ----------------flex div------------------  */}
      <div
        data-aos="fade-down"
        className="flex justify-center mt-10 uppercase font-semibold"
      >
        {/* -----------------grid div -------------- */}
        <div
          className={`${nunito.className} grid sm: grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10`}
        >
          {skillData.map(({ logo, title }) => (
            <div
              key={title}
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="300"
              className=" py-5 rounded-sm w-[160px]  flex justify-center"
            >
              <div className="inner-element">
                <div className="h-[100px]">
                <figure className="zoom-effect">
                <Image className="w-[100px] fiterimg" src={logo} alt="" />
                </figure>
                 <br />
                </div>
                <h1 className="flex justify-center">{title}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MySkills;
