import React, { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
  };

  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
      <h1 className='text-[#F5D0B1] font-bold text-2xl z-20'>kljlkj</h1>
     
      <HiMenuAlt3 onClick={handleNav} className='z-20 text-[#F5D0B1] cursor-pointer' size={25} />
      <div
        className={
          nav
            ? 'ease-in-out duration-1000 fixed text-[#F5D0B1] left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
            : 'absolute top-0 h-screen left-[-100%] ease-in-out duration-1000 transform-(transla) z-10'
        }
      >
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <li className='font-bold text-3xl p-8'>Home</li>
          <li className='font-bold text-3xl p-8'>About Us</li>
          <li className='font-bold text-3xl p-8'>Our Breads</li>
          <li className='font-bold text-3xl p-8'>Why Sour Bread</li>
          <li className='font-bold text-3xl p-8'>History of Sour Maya</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;