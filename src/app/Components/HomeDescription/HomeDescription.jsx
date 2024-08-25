import React from "react";
import "./HomeDescription.css";
import Image from "next/image";
import { Nunito_Sans } from "next/font/google";
import { Arsenal } from "next/font/google";
import img1 from "@/assests/icon/Architecture.png";
import img2 from "@/assests/icon/UserExperience.png";
import img3 from "@/assests/icon/StackMastery.png";

const nunito = Nunito_Sans({ subsets: ["latin"] });
const arsenal = Arsenal({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const HomeDescription = () => {
  const descriptionData = [
    {
      logo: img1,
      title: "Scalable Architecture",
      description:
        "Building robust and scalable web applications with a solid architecture, utilizing the power of MongoDB, Express.js, React, and Node.js to handle your growing business needs",
    },
    {
      logo: img2,
      title: "Seamless User Experience",
      description:
        "Ensuring a seamless and intuitive user experience through responsive design and performance optimization, leveraging the latest capabilities of Next.js and React",
    },
    {
      logo: img3,
      title: "Mern-Stack Mastery",
      description:
        "From crafting dynamic front-ends to building powerful back-end systems,I offer full-stack development services, ,Complete front-end to back-end solutions with efficient code",
    },
  ];

  return (
    <div className="pt-[20px] pb-14 flex justify-center text-center">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm: grid-cols-1 gap-8">
        {descriptionData.map(({ logo, title, description }) => (
          <div key={title}>
            <span className="flex justify-center mb-3">
                <Image className="fiterdiscIcon zoom-in-out w-[100px]" src={logo} alt="" />
            </span>
            <h1 className={`${arsenal.className} mb-3 text-2xl text-purple-800`}>{title}</h1>
            <p className={`${nunito.className} text-md text-black`}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDescription;
