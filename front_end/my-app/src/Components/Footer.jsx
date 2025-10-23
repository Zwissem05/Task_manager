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
        <div className=" bg-white p-20">
        <div className="max-w-[1240px] text-black mx-auto  ">
            <div className="grid md:grid-cols-3 items-center ">
                    <div>

                    <h1 className="text-blue-800 font-bold text-3xl  p-4 ">Task Manger.</h1>
                    <div className="flex justify-between p-5 ">
                    <FaDribbbleSquare size={30}  />
                    <FaFacebookSquare size={30} />
                    <FaGithubSquare size={30}  />
                    <FaInstagram size={30}  />
                    <FaTwitterSquare size={30} />
                    </div>
                    </div>
                    <div className="md:col-span-2  flex justify-between  text-sm md:text-md mx-5 mx-auto ">
                    
                    <ul className="p-1  flex flex-col justify-center items-center ">
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
                    <ul className="p-1  flex flex-col justify-center items-center">
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