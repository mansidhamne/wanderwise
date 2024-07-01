// "use client"

// import React from 'react'
// import Link from 'next/link'
// import { useEffect, useState } from 'react'

// const Navbar = () => {
//   const [isScrolledDown, setIsScrolledDown] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     let previousScroll = 0;

//     const onScroll = () => {
//       if (window.scrollY > previousScroll && window.scrollY > 200) {
//         setIsScrolledDown(true);
//       } else {
//         setIsScrolledDown(false);
//       }
//       previousScroll = window.scrollY;
//     };

//     window.addEventListener("scroll", onScroll);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   }


//   return (
//     <>
//     {!isScrolledDown && (
//       <div className="fixed top-6 left-0 right-0 mx-64 bg-white rounded-full z-10">
//       <div className="container mx-auto px-6 py-3 flex justify-between items-center">
//         <div className="text-lg font-bold">
//             <img src="/images/logo.png" alt="logo" className='w-32'/>
//         </div>
//         <ul className="flex space-x-8 items-center">
//           <li><Link href="/buddy" className="text-teal-800">Buddy</Link></li>
//           <li><Link href="/services" className="text-teal-800">Services</Link></li>
//           <li><Link href="/contact" className="text-teal-800">Contact</Link></li>
//           <li><Link href="/login" className="text-gray-700">
//             <button className="bg-teal-800 hover:bg-slate-500 text-white font-semibold  py-1 px-4 rounded-full">
//               Login
//             </button>
//             </Link>
//           </li>
//         </ul>
//       </div>
//     </div>
//   )}
//   </>
//   )
// }

// export default Navbar

"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = window.innerWidth < 768;

  useEffect(() => {
    let previousScroll = 0;

    const onScroll = () => {
      if (window.scrollY > previousScroll && window.scrollY > 200) {
        setIsScrolledDown(true);
      } else {
        setIsScrolledDown(false);
      }
      previousScroll = window.scrollY;
    };

    window.addEventListener('scroll', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {!isScrolledDown && (
        <div className="fixed top-3 md:top-6 left-0 right-0 bg-transparent md:bg-white rounded-full z-10 mx-2 md:mx-32 lg:mx-60">
          <div className="container mx-auto px-2.5 lg:px-6 py-1.5 lg:py-3 flex justify-between items-center">
            <div className="text-lg font-bold">
              {isMobile ? <img src='/images/logo-white.png' alt="logo" className="w-40"/> : <img src="/images/logo.png" alt="logo" className="w-36"/>}
            </div>
            <div className="hidden md:flex space-x-4 lg:space-x-8 items-center">
              <Link href="/buddy" className="text-teal-800">Buddy</Link>
              <Link href="/services" className="text-teal-800">Services</Link>
              <Link href="/contact" className="text-teal-800">Contact</Link>
              <Link href="/login" className="text-gray-700">
                <button className="bg-teal-800 hover:bg-slate-500 text-white font-semibold py-1 px-4 rounded-full">
                  Login
                </button>
              </Link>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-teal-800 focus:outline-none">
                {isMenuOpen ? <FaTimes size={22} color='#ffffff'/> : <FaBars size={22} color='#ffffff'/>}
              </button>
            </div>
          </div>
          {isMenuOpen && (
            <div className="md:hidden mt-2 bg-white rounded-lg px-6 py-3 text-center">
              <Link href="/buddy" className="block text-teal-800 py-2">Buddy</Link>
              <Link href="/services" className="block text-teal-800 py-2">Services</Link>
              <Link href="/contact" className="block text-teal-800 py-2">Contact</Link>
              <Link href="/login" className="block text-gray-700 py-2">
                <button className="bg-teal-800 hover:bg-slate-500 text-white font-semibold py-1 px-4 rounded-full w-full">
                  Login
                </button>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
