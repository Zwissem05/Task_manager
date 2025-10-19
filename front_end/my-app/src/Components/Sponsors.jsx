import React from 'react'
import { assets } from '../assets/assests'

const Sponsors = () => {
  return (
    <div className="flex justify-evenly items-center flex-wrap w-full px-8 py-10 bg-transparent mt-14">
      
      <div className="flex flex-col justify-center items-center gap-2">
        <img src={assets.Duolingo} alt="Duolingo" className="h-12 object-contain invert" />
        <h1 className="text-white text-sm md:text-base">Duolingo</h1>
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <img src={assets.Ford} alt="Ford" className="h-12 object-contain invert" />
        <h1 className="text-white text-sm md:text-base">Ford</h1>
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <img src={assets.Shopify} alt="Shopify" className="h-12 object-contain invert" />
        <h1 className="text-white text-sm md:text-base">Shopify</h1>
      </div>

      <div className="flex flex-col justify-center items-center gap-2">
        <img src={assets.Spotify} alt="Spotify" className="h-12 md:h-14 object-contain invert" />
        <h1 className="text-white text-sm md:text-base">Spotify</h1>
      </div>

    </div>
  )
}

export default Sponsors
