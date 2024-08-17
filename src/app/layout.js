import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Layout/Navbar/Navbar";
import Footer from "./Components/Layout/Footer/Footer";


const nunito = Nunito_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Tamzid-Portfolio",
  description: "Created by Tamzid620",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="mx-20">
        <Navbar/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  );
}
