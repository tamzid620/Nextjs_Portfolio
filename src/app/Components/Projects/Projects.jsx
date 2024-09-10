import React from "react";
import { Nunito_Sans } from "next/font/google";
import { Arsenal } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"] });
const arsenal = Arsenal({
  weight: "400",
  subsets: ["latin"],
});

const Projects = () => {
  return (
    <div id="projects" className={`${nunito.className} py-20`}>
      <h2
        className={`${arsenal.className} text-4xl text-purple-800 uppercase flex justify-center mb-5`}
      >
        My Projects
      </h2>
      <hr className="border-[1px] border-purple-800" />
      <div className="flex justify-center mt-10">
    In Progress...
      </div>
    </div>
  );
};

export default Projects;
