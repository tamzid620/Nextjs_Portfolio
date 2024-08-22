import bannerimg from "@/assests/image/result.png";
import Typewriter from "react-ts-typewriter";
import { Nunito_Sans } from "next/font/google";
import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const nunito = Nunito_Sans({ subsets: ["latin"] });

const Banner = () => {

  Aos.init();

  return (
    <div className={nunito.className}>
      <div
        style={{ justifyItems: "center", alignItems: "center" }}
        className="grid sm:grid-cols-1 lg:grid-cols-2 items-center pb-14"
      >
        {/* Heading section */}
        <div className="sm:ms-3 lg:ms-20 lg:mt-[150px] md:mt-[150px] sm:mt-[120px]">
          <p
            
            className="font-semibold"
          >
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
              A passionate web developer dedicated to crafting exceptional online
              experiences. With a keen eye for design and a love for coding, I
              specialize in creating dynamic and user-friendly websites that leave
              a lasting impression from front-end development using HTML, CSS, Nextjs, Reactjs,
              and JavaScript to back-end programming with Expressjs and Mongodb
              and more.
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
               hover:from-purple-500 hover:to-indigo-900 
               shadow-2xl "
            >
              Resume
            </button>
          </a>
        </div>
        {/* Banner picture section */}
        <div>
          <Image className="w-[350px] lg:mt-[100px] md:mt-0 sm:mt-0 rounded-full" src={bannerimg} alt="Banner Image" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
