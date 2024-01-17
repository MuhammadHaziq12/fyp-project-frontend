// 'use client'
// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import Sidebar from '@/components/sidebar/Sidebar'


// const Navbar = () => {
//     const [nav, setNav] = useState(false);

//     const links = [
//         {
//             id: 1,
//             link: "/",
//             label: "Home",
//         },
//         {
//             id: 2,
//             link: "about",
//             label: "About",
//         },
//         {
//             id: 3,
//             link: "portfolio",
//             label: "Portfolio",
//         },
//         {
//             id: 4,
//             link: "experience",
//             label: "Experience",
//         },
//         {
//             id: 5,
//             link: "contact",
//             label: "Contact",
//         },
//     ];

//     return (
//         <div className='flex'>
//             <nav>
//                 <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed nav">
//                     <div className="p-7 flex flex-col">
//                         {/* <h1 className="text-4xl font-signature ml-20 order-2">
//                             <a
//                                 className="link-underline link-underline-black"
//                                 href=""
//                                 target="_blank"
//                                 rel="noreferrer"
//                             >
//                                 Dashboard
//                             </a>
//                         </h1> */}
//                     </div>

//                     <ul className="hidden md:flex">
//                         {links.map(({ id, link, label }) => (
//                             <li
//                                 key={id}
//                                 className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
//                             >
//                                 {
//                                     <a href={link}>{label}</a>
//                                 }
//                             </li>
//                         ))}
//                     </ul>

//                     <div
//                         onClick={() => setNav(!nav)}
//                         className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
//                     >
//                         {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
//                     </div>

//                     {nav && (
//                         <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
//                             {links.map(({ id, link, label }) => (
//                                 <li
//                                     key={id}
//                                     className="px-4 cursor-pointer capitalize py-6 text-4xl"
//                                 >
//                                     {
//                                         <a href={link}>{label}</a>
//                                     }
//                                 </li>
//                             ))}
//                         </ul>
//                     )}
//                 </div>
//             </nav>
//         </div>
//     );
// };

// export default Navbar;

// // import React from 'react'

// // const Navbar = () => {
// //     return (
// //         <div className='flex'>
// //             <Sidebar />
// //             <div className='p-7'>
// //                 <h1 className='text-2xl font-semibold'>Home Page</h1>
// //             </div>
// //         </div>

// //     )
// // }

// // export default Navbar



'use client'
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import React from "react";

 const Navbar = () => {
    return (
        <nav className="sticky bg-amber-300 top-0 z-40 flex w-full drop-shadow">
            <div className="flex flex-grow items-center gap-2 justify-end py-4 shadow md:px-6 2xl:px-11">
               <div  className="flex flex-grow items-center gap-2 justify-start py-4">
               <h1 className="text-3xl">
                DashBoard
               </h1>
               </div>
               <button className="inline-flex bg-black text-white rounded-3xl gap-4 items-center justify-center px-6 py-2 font-medium tracking-wide uppercase">
                Connect Wallet
                </button>
                <button className="inline-flex gap-4 items-center justify-center px-6 py-2 font-medium tracking-wide uppercase">
                <IoIosNotificationsOutline className="text-3xl"  />
                
                <CgProfile className="text-3xl" />
                <CiSettings className="text-4xl" />
                </button>
            </div>
        </nav>
    )
 }
 export default Navbar
