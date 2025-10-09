import React from 'react'
import { assets } from '../assets/assests'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { useEffect, useState } from "react";




const Navbar = () => {
    const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ✅ useEffect placé ici (pas dans handleNav)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // nettoyage quand le composant est démonté
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };


    return (
        <div
            className={`fixed top-0 left-0 right-0 z-50  transition-colors duration-500 ${scrolled ? "bg-black " : "bg-transparent"
                }`}
        >        <div className=' max-w-[1240px] mx-auto p-4 '>
                <div className=' flex justify-center sm:justify-between items-center relative'>
                    <img className='w-16 sm:w-20 invert' src={assets.logo} alt='logo' />
                    <div className='flex gap-4'>
                        <button className='absolute right-0 top-2 rounded-md px-5 py-1.5 border border-white text-white bg-[#0969DA] md:static'>
                            Sign in
                        </button>
                        <button className=' hidden md:block rounded-md px-5 py-1.5  text-white  '>
                            Sign Up
                        </button>
                    </div>

                    <div className="sm:hidden text-white absolute left-4 text-2xl  " onClick={handleNav}>
                        {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
                    </div>
                    <div className={nav ? "fixed h-full top-24 w-full bg-white py-10 px-4 ease-in-out  duration-500 sm:hidden" : "fixed left-[-100%] sm:hidden"} >


                        <ul className=" uppercase mt-10 mx-5 sm:hidden font-semibold text-gray-600 font-roboto" >
                            <div className='flex justify-between '>
                                <li className=" py-3"> Home</li>
                                <img className='w-4' src={assets.keyborad_icon} alt='/' />
                            </div>
                            <div className='flex justify-between'>
                                <li className=" py-3 "> Company</li>
                                <img className='w-4' src={assets.keyborad_icon} alt='/' />
                            </div>
                            <div className='flex justify-between'>
                                <li className=" py-3 "> Recources</li>
                                <img className='w-4' src={assets.keyborad_icon} alt='/' />
                            </div>
                            <div className='flex justify-between'>
                                <li className=" py-3 "> About</li>
                                <img className='w-4' src={assets.keyborad_icon} alt='/' />
                            </div>

                            <div className='flex justify-between'>
                                <li className=" py-3 "> Contact</li>
                                <img className='w-4' src={assets.keyborad_icon} alt='/' />
                            </div>
                        </ul>
                        <button className=' rounded-md w-full mt-20 py-2  border border-white text-white bg-gray-800 font-semibold '>
                            Sign in
                        </button>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Navbar