import React from 'react'
import double from "../assets/double.png"
import single from "../assets/single.png"
import triple from "../assets/triple.png"

const Fonctionalities = () => {
  return (
    <div className="bg-white mt-20 p-20 ">
        <div className="grid md:grid-cols-3 gap-8 max-w-[1240px] mx-auto ">
        <div className=" w-full border shadow-2xl rounded-lg py-10 hover:scale-105 duration-300">
         <img src={single} alt="/" className="mx-auto w-24" />
         <h2 className="text-2xl font-bold text-center pt-4 mb-[-1rem] ">Single User</h2>
        <p className="text-center font-medium text-4xl p-5">$149</p>
        <div className="text-center mb-5 mt-[-10px]">
            <p className="p-1" >500 GB Storage</p>
            <p className="p-1">1 Granted User</p>
            <p className="p-1">Send up to 2GB</p>

        </div>
        <button className="rounded-md block bg-green-600 w-[150px] mx-auto p-2">Get Started</button>
        </div>
        <div className=" bg-gray-200 w-full border shadow-2xl rounded-lg py-10 hover:scale-105 duration-300">
         <img src={double} alt="/" className="mx-auto w-24" />
         <h2 className="text-2xl font-bold text-center pt-4 mb-[-1rem] ">Double User</h2>
        <p className="text-center font-medium text-4xl p-5">$149</p>
        <div className="text-center mb-5 mt-[-10px]">
            <p className="p-1" >500 GB Storage</p>
            <p className="p-1">1 Granted User</p>
            <p className="p-1">Send up to 2GB</p>

        </div>
        <button className="rounded-md block bg-green-600 w-[150px] mx-auto p-2">Get Started</button>
        </div>

        <div className=" w-full border shadow-2xl rounded-lg py-10 hover:scale-105 duration-300">
         <img src={triple} alt="/" className="mx-auto w-24" />
         <h2 className="text-2xl font-bold text-center pt-4 mb-[-1rem] "> User</h2>
        <p className="text-center font-medium text-4xl p-5">$149</p>
        <div className="text-center mb-5 mt-[-10px]">
            <p className="p-1" >500 GB Storage</p>
            <p className="p-1">1 Granted User</p>
            <p className="p-1">Send up to 2GB</p>

        </div>
        <button className="rounded-md block bg-green-600 w-[150px] mx-auto p-2">Get Started</button>
        </div>

        </div>


    </div>
  )
}

export default Fonctionalities