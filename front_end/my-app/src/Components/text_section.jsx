import React from 'react'
import { useEffect, useRef } from "react";
import Typed from "typed.js"
import { assets } from '../assets/assests';


const Text_section = () => {
    // Créer une référence pour l'élément qui contiendra l'animation
    const el = useRef(null);

    useEffect(() => {
        const options = {
            strings: ['professionally', 'personally'],
            typeSpeed: 120,
            backSpeed: 140, // Correction: backSpadd → backSpeed
            loop: true
        };

        // Initialiser Typed.js
        const typed = new Typed(el.current, options);

        // Nettoyer lors du démontage du composant
        return () => {
            typed.destroy();
        };
    }, []);

    return (

        <div className="max-w-[1240px]  text-white mx-auto fixed top-0 right-0 left-0">
            <div className="max-w-[800px] flex flex-col  items-center  mx-auto md:mt-[250px] mt-[100px] ">
                <h1 className="p-4 font-bold md:text-5xl text-white">Organize Your Work Smarter</h1>
                <p className="p-1 text-[#87CEEB] md:text-2xl sm:text-xl">Perfect for managing your tasks  <span className="md:p-2  text-cyan-200 " ref={el}></span></p>
            </div>
            <div className='  flex flex-col items-center justify-center p-6 mt-5 sm:px-16 md:flex-row md:space-x-4 '>
                <div className='bg-gray-300 w-full flex flex-col rounded-md sm:flex-row md:w-[550px]'>
                    <input
                        className='  placeholder:text-gray-600 py-3 px-5 bg-gray-300 rounded-md font-semibold sm:w-1/2' type='Email' placeholder='Enter your Email' required />
                    <button className=' bg-green-700 rounded-md p-3 m-[5px] font-semibold whitespace-nowrap sm:w-1/2'>Sign Up </button>
                </div>
                <button className=' w-full  mt-8 bg-gray-500 border border-white p-3 rounded-md sm:w-[300px] md:mt-[1px] md:py-[16px] md:w-[200px] whitespace-nowrap text-sm '>Try Task_Manager Capilot</button>
            </div>
 



        </div >
    )
}


export default Text_section 