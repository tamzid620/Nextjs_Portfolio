"use client";
import { Nunito_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import HomeLoading from "../Components/HomeLoading/HomeLoading";
import Navbar from "../Components/Layout/Navbar/Navbar";
import Footer from "../Components/Layout/Footer/Footer";

const nunito = Nunito_Sans({ subsets: ["latin"] });

 export const metadata = {
  title: "Tamzid-Portfolio",
  description: "Created by Tamzid620",
};

const ClientWrapper = ({ children }) => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds loading

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
        <body className={nunito.className}>
        {loading ? (
          <HomeLoading />
        ) : (
          <>
            <Navbar />
            {children}
            <Footer />
          </>
        )}
        </body>
    </html>
  );
};

export default ClientWrapper;
