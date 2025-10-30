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
    <div className="bg-white p-8 sm:p-12 overflow-x-hidden">
      <div className="max-w-[1240px] mx-auto text-black">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-6 px-4 sm:px-10">
          
          {/* Logo + Réseaux sociaux */}
          <div className="text-center md:text-left">
            <h1 className="text-blue-800 font-bold text-3xl">Task Manager.</h1>
            <div className="flex justify-center md:justify-start pt-6 gap-4 flex-wrap">
              <FaDribbbleSquare size={30} />
              <FaFacebookSquare size={30} />
              <FaGithubSquare size={30} />
              <FaInstagram size={30} />
              <FaTwitterSquare size={30} />
            </div>
          </div>

          {/* Liens */}
          <div className="md:col-span-2 flex flex-wrap justify-center md:justify-between text-sm md:text-md gap-6 pt-6">
            {["Acceuil", "Company", "Resources", "Contact"].map((section) => (
              <ul key={section} className="text-center md:text-left">
                <p className="text-gray-500 font-bold md:text-xl p-3">{section}</p>
                <li>Analytics</li>
                <li>Marketing</li>
                <li>Commerce</li>
                <li>Insights</li>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
