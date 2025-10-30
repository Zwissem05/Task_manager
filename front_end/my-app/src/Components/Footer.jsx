import React from "react";
import{
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare

}
from 'react-icons/fa'
function Footer() {
    return (
        <div className=" bg-white pb-8 ">
        <div className="max-w-[1240px] mx-auto text-black  ">
            <div className="grid lg:grid-cols-3 items-center px-10 ">
                    <div>
                    <h1 className="text-blue-800 font-bold text-3xl text-center ">Task Manger.</h1>
                    <div className="flex justify-between pt-8 gap-4  ">
                    <FaDribbbleSquare size={30}  />
                    <FaFacebookSquare size={30} />
                    <FaGithubSquare size={30}  />
                    <FaInstagram size={30}  />
                    <FaTwitterSquare size={30} />
                    </div>
                    </div>
                    <div className="lg:col-span-2  flex justify-between flex-wrap  text-sm md:text-md sm:px-10 pt-3  ">
                    
                    <ul className="p-1  flex flex-col justify-center items-center  ">
                        <p className="text-gray-500 font-bold md:text-xl p-3">Acceuil </p>
                        <li>Analytics</li>
                        <li>Marketing</li>
                        <li>Commerce</li>
                        <li>Insights</li>
                    </ul>
                    <ul className="p-1  flex flex-col justify-center items-center">
                    <p className="text-gray-500 font-bold md:text-xl p-3">Company </p>

                        <li>Analytics</li>
                        <li>Marketing</li>
                        <li>Commerce</li>
                        <li>Insights</li>
                    </ul>
                    <ul className="p-1 flex flex-col justify-center items-center">
                    <p className="text-gray-500 font-bold md:text-xl p-3">Recources </p>

                        <li>Analytics</li>
                        <li>Marketing</li>
                        <li>Commerce</li>
                        <li>Insights</li>
                    </ul>
                    <ul className="p-1 flex flex-col justify-center items-center">
                    <p className="text-gray-500 font-bold md:text-xl p-3">Contact</p>

                        <li>Analytics</li>
                        <li>Marketing</li>
                        <li>Commerce</li>
                        <li>Insights</li>
                    </ul>
                    </div>

            </div>
            </div>


        </div>
    )
}
export default Footer 