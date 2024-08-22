// src/app/layout.js
import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Footer from "./Components/Layout/Footer/Footer";

const nunito = Nunito_Sans({ subsets: ["latin"] });

// Remove the "use client" directive
export const metadata = {
  title: "Tamzid-Portfolio",
  description: "Created by Tamzid620",
};

const RootLayout = ({ children }) => {

  return (
    <html lang="en">
      <body className={nunito.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
