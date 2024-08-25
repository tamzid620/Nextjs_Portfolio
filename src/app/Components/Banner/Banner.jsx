import "./Banner.css";
import bannerimg from "@/assests/image/result.png";
import Typewriter from "react-ts-typewriter";
import { Nunito_Sans } from "next/font/google";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import nextjs from "@/assests/icon/Next.js.png";
import reactjs from "@/assests/icon/reactLogo-modified.png";

const nunito = Nunito_Sans({ subsets: ["latin"] });

const Banner = () => {
  Aos.init();

  return (
    <div className={nunito.className}>
      <div
        style={{ justifyItems: "center", alignItems: "center" }}
        className="grid sm:grid-cols-1 lg:grid-cols-2 items-center lg:pt-0 md:pt-0 sm: pt-16"
      >
        {/* Heading section */}
        <div className="sm:ms-3 lg:ms-20 lg:mt-[150px] md:mt-[150px] sm:mt-[120px]">
          <p className="font-semibold">
            <span
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="700"
              className="font-bold text-1xl uppercase text-purple-800"
            >
              Hi,{" "}
            </span>{" "}
            <br />
            <span className="font-bold text-3xl uppercase">
              I am
              <span
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1000"
                className="text-purple-800"
              >
                <Typewriter text=" Tamzid Ull Monir ," />
              </span>
            </span>{" "}
            <br />
            <span
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              I’m a passionate web developer from Bangladesh, <br />
               specializing in dynamic, user-friendly websites with expertise in HTML, CSS, Next.js, React.js, JavaScript, Express.js, and MongoDB.
            </span>
          </p>
          <a
            href="https://drive.google.com/file/d/1RincmeyzN1IkgezEKJms6OJPHqLrnF8_/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
          >
            <button
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="100"
              className="w-[85px] px-[0px] py-[5px] rounded-sm text-white mt-3
              bg-gradient-to-t from-indigo-900 to-purple-500
              shadow-lg shadow-purple-900
               hover:from-purple-500 hover:to-indigo-900"
            >
              Resume
            </button>
          </a>
        </div>
        {/* Banner picture section */}
        <div className="relative">
        <div className="relative">
          <Image
            className=" w-[350px] lg:mt-[100px] md:mt-0 sm:mt-0 rounded-full"
            src={bannerimg}
            alt="Banner Image"
          />
          <div className="animate-bounce absolute top-[0px] left-[0px] mt-[100px] ml-[20px]">
            <Image className="w-[55px] bannerFiterimg" src={nextjs} alt="" />
          </div>
          <div className="animate-bounce absolute bottom-[0px] right-[0px] md:mb-[60px] md:-mr-[25px]
          sm: mb-[205px] sm: mr-[15px]
          ">
            <Image className="w-[55px] bannerFiterimg" src={reactjs} alt="" />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
