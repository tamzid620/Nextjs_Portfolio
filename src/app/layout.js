import { Nunito_Sans } from "next/font/google";
import "./globals.css";
import ClientWrapper from "./ClientWrapper/ClientWrapper";

const nunito = Nunito_Sans({ subsets: ["latin"] });

 export const metadata = {
  title: "Tamzid-Portfolio",
  description: "Created by Tamzid620",
};

const RootLayout = ({ children }) => {


  return (
    <html lang="en">
        <body className={`${nunito.className} `}>
          <ClientWrapper>
            {children}
          </ClientWrapper>
        </body>
    </html>
  );
};

export default RootLayout;
