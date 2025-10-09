import React from 'react'
import { assets } from '../assets/assests'

const Animation = () => {
  return (
    <div>
         <div className=" hidden  relative md:flex items-center justify-center mt-16">
            {/* Effet lumineux circulaire */}
            <div className="absolute w-[1000px] h-[150px]  blur-3xl rounded-full  bg-[radial-gradient(circle,rgba(255,100,255,0.6),rgba(0,0,0,0))] "></div>
        
            {/* Image avec effet d’inversion et légère ombre */}
            <img
              className="w-40 invert drop-shadow-[0_0_25px_rgba(255,100,255,0.8)] animate-float"
              src={assets.Task}
              alt="/"
            />
        </div >
        <div  className='  hidden md:flex justify-center m-14 relative'>
        <div className="absolute w-[1200px] h-[550px] blur-3xl   bg-[radial-gradient(rgba(255,100,255,1),rgba(0,0,0,0))] "></div>

        <div className=' bg- m-3 rounded-lg bg-[rgba(255,100,255,0.4)] border border-blue-100 z-10'>
        <img className='w-[1100px] h-[500px] p-4'
        src={assets.app} alt='/'/>
        </div>

        </div>
    </div>
  )
}

export default Animation