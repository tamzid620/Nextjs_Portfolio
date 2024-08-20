import React from 'react';
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"] });
const Footer = () => {
    return (
        <div className={nunito.className}>
            <div className="pt-20 bg-purple-900">
                <footer className="border-t-2 border-purple-200 footer footer-center p-4 text-base-content font-semibold ">
                    <div>
                        <p className='text-white'>Copyright  2023 - All right reserved by Tamzid Ull Monir</p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;