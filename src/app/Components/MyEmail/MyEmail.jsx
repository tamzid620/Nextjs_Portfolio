import './MyEmail.css'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Nunito_Sans } from "next/font/google";
import { Arsenal } from "next/font/google";
import DefalutLoading from "../DefalutLoading/DefalutLoading";
import emailjs from "emailjs-com";
import emailImage from "@/assests/icon/email.gif";
import facebook from "@/assests/icon/facebook.png";
import instagram from "@/assests/icon/instagram.png";
import linkedin from "@/assests/icon/linkedin.png";
import github from "@/assests/icon/github.png";
import whatsapp from "@/assests/icon/whatsApp.png";
import {
  MdMarkEmailUnread,
  MdCall,
  MdWhatsapp,
  MdLocationOn,
} from "react-icons/md";
import Swal from "sweetalert2";
import Aos from "aos";
import "aos/dist/aos.css";

emailjs.init("PIOjzCl1ftxF_58QU");

const nunito = Nunito_Sans({ subsets: ["latin"] });
const arsenal = Arsenal({
  weight: "400",
  subsets: ["latin"],
});

const MyEmail = () => {
  const [loading, setLoading] = useState(false);
  Aos.init();

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    const params = {
      from_name: document.getElementById("fullName").value,
      email_id: document.getElementById("email_id").value,
      subject: document.getElementById("subject").value,
      Feedback: document.getElementById("message").value,
    };
    emailjs
      .send("service_ajtda09", "template_42ulb2t", params)
      .then(() =>{
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Email Sent Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        setLoading(false);
      })
      .catch((error) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Email Sending Failed",
          text: error.text,
          showConfirmButton: true,
        });
        setLoading(false);
      });
  };

  return (
    <>
      <div id="contact" className={`${nunito.className} py-20`}>
        <h2
          className={`${arsenal.className} text-4xl text-purple-800 uppercase flex justify-center mb-5`}
        >
          Send Your Email
        </h2>
        <hr className="border-[1px] border-purple-800" />
        <div className="flex justify-center mt-10">
          <div
            className="grid sm:grid-cols-1 lg:grid-cols-2"
          >
            {/* picture information seciton  */}
            <div  data-aos="fade-left" data-aos-offset="100"
            className="text-lg">
              <Image
                className="w-[500px] rounded-lg mb-5"
                src={emailImage}
                alt=""
              />
              <p className="text-purple-900 font-semibold flex gap-3 items-center ms-3">
                <MdMarkEmailUnread className="text-red-500" /> E-mail :
                tamzid620@gmail.com
              </p>
              <p className="text-purple-900 font-semibold flex gap-3 items-center ms-3">
                <MdCall className="text-green-700" /> Phone : +8801852951963
              </p>
              <p className="text-purple-900 font-semibold flex gap-3 items-center ms-3">
                {/* eslint-disable-next-line react/no-unescaped-entities  */}
                <MdWhatsapp className="text-green-500" /> what'sapp :
                +8801852951963
              </p>
              <p className="text-purple-900 font-semibold flex gap-3 items-center ms-3">
                <MdLocationOn className="text-yellow-400" /> Location :
                Chattogram,Bangladesh
              </p>
              <div className="footer p-5 ">
                <div>
                  <h2 className="text-purple-900 mb-3 font-semibold">
                    Social Links:
                  </h2>
                  <div className="grid grid-flow-col gap-4">
                    
                  <div>
                      <Link target="_blank" href="https://www.linkedin.com/in/tamzid-ull-monir-96b163260/">
                        <Image
                        className="icon-bounce shadow-lg shadow-purple-800 border-2 border-purple-200 rounded-full"
                          style={{ width: "30px" }}
                          src={linkedin}
                          alt=""
                        />
                      </Link>
                    </div>

                    <div>
                      <Link target="_blank" href="https://github.com/tamzid620">
                        <Image
                        className="icon-bounce shadow-lg shadow-purple-800 border-2 border-purple-200 rounded-full" style={{ width: "30px" }}
                         src={github} 
                         alt="" 
                         />
                      </Link>
                    </div>

                    <div>
                      <Link target="_blank" href="https://wa.me/+8801852951963">
                        <Image
                        className="icon-bounce shadow-lg shadow-purple-800 border-2 border-purple-200 rounded-full" style={{ width: "30px" }}
                         src={whatsapp} 
                         alt="" 
                         />
                      </Link>
                    </div>
                    <div>
                      <Link target="_blank" href="https://www.facebook.com/tamzid.ull.monir512">
                        <Image
                        className="icon-bounce shadow-lg shadow-purple-800 border-2 border-purple-200 rounded-full"
                          style={{ width: "30px" }}
                          src={facebook}
                          alt=""
                        />
                      </Link>
                    </div>

                    <div>
                      <Link target="_blank" href="https://www.instagram.com/Tamzid_Ull_Monir/">
                        <Image
                        className="icon-bounce shadow-lg shadow-purple-800 border-2 border-purple-200 rounded-full"
                          style={{ width: "30px" }}
                          src={instagram}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* email input section  */}
            <div data-aos="fade-right" data-aos-offset="100">
              <form
                onSubmit={handleSubmit}
                action="/submit-feedback"
                method="post"
                className="bg-transparent shadow-xl shadow-purple-300 lg:w-[550px] sm:w-[350px] mx-auto p-4  rounded-md"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Name:
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="name"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    placeholder="Your Name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email_id"
                    name="email"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    placeholder="Your E-mail"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Subject:
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    placeholder="E-mail Subject"
                  />
                </div>

                <div>
                  <label
                    htmlFor="feedback"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Feedback:
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                    placeholder="Your FeedBack"
                  ></textarea>
                </div>
                {/* Loading logic ---------------------- */}
                {loading ? (
                  <DefalutLoading />
                ) : (
                  <button
                    type="submit"
                    className="w-[85px] px-[0px] py-[8px] rounded-sm text-white mt-3
              bg-gradient-to-t from-indigo-900 to-purple-500
              shadow-lg shadow-purple-900
               hover:from-purple-500 hover:to-indigo-900"
                  >
                    Send
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyEmail;
