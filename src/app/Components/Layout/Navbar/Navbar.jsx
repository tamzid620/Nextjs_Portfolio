import Image from 'next/image';
import React from 'react';
import logo from '@/assests/icon/svgicon.png';

const Navbar = () => {

const navLists =[
    {
        path:"/" ,
        title:"Home"
    },
    {
        path:"/" ,
        title:"Skils"
    },
    {
        path:"/" ,
        title:"Projects"
    },
    {
        path:"/" ,
        title:"About"
    },
    {
        path:"/" ,
        title:"Contact"
    }
]

    return (
        <nav
       
        className='flex justify-between fixed z-10 bg-gray-500 opacity-90 py-5'>
            {/* logo part  */}
            <div className="flex items-center gap-1">
                <Image src={logo} alt='portfolio logo' className='w-[35px]'/>
            <h1 className='text-2xl font-bold uppercase text-sky-500'>
            <span className='text-black'>Tam</span><span>zid</span>
                </h1>
            </div>
            {/* navlist part  */}
            <div>
                {
navLists.map(({path ,title}) =>(
    <ul key={path}>
        <li className=''>{title}</li>
    </ul>
))
                }
            </div>
        </nav>
    );
};

export default Navbar;