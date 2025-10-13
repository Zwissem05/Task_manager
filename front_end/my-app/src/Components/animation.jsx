import React, { useState, useRef, useEffect } from 'react'; // ✅ Ajout des imports
import { assets } from '../assets/assests'
import { motion, useScroll, useTransform } from "framer-motion"

const Animation = () => {
  // ✅ Déclaration des variables manquantes
  const [isFixed, setIsFixed] = useState(false);
  const imageRef = useRef(null);
  const { scrollY } = useScroll(); // ✅ Changé de scrollYProgress à scrollY

  // ✅ Nouvelles animations basées sur scrollY
  const y = useTransform(scrollY, [0, 300], [100, 0]);
  const opacity = useTransform(scrollY, [0, 150], [0, 1]);
  const scale = useTransform(scrollY, [0, 300], [0.8, 1]);

  // ✅ Ajout de l'effet pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!imageRef.current) return;
      
      const rect = imageRef.current.getBoundingClientRect();
      
      if (rect.top <= 100 && !isFixed) {
        setIsFixed(true);
      } else if (rect.top > 100 && isFixed) {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isFixed]);
  return (
    <div >
      <div className='fixed top-[500Px] right-0 left-0'>
         <div className=" hidden  relative md:flex items-center justify-center mt-20 animate-fade1">
            {/* Effet lumineux circulaire */}
            <div className="absolute w-[1000px] h-[180px]  blur-3xl rounded-full  bg-[radial-gradient(circle,rgba(255,100,255,0.6),rgba(0,0,0,0))] "></div>
        
            {/* Image avec effet d’inversion et légère ombre */}
            <img
              className="w-40 invert drop-shadow-[0_0_25px_rgba(255,100,255,0.8)] animate-float"
              src={assets.Task}
              alt="/"
            />
        </div >
        </div>
   <div className={`${isFixed ? 'h-[600px] ' : ''}`}>
        <motion.div 
          ref={imageRef}
          className='flex justify-center m-14 relative mt-[900px]'
          style={{
            y: isFixed ? undefined : y,
            opacity: isFixed ? 1 : opacity,
            scale: isFixed ? 1 : scale,
            position: isFixed ? 'fixed' : 'relative',
            top: isFixed ? '200px' : 'auto',    // Encore plus bas
            left: isFixed ? '0' : 'auto',
            right: isFixed ? '0' : 'auto',
            zIndex: isFixed ? 40 : 'auto'
          }}
        >
          <div className="absolute w-[1200px] h-[550px] blur-3xl bg-[radial-gradient(rgba(255,100,255,1),rgba(0,0,0,0))]"></div>
          <div className='m-3 rounded-lg bg-[rgba(255,100,255,0.4)] border border-blue-100 z-10'>
            <img 
              className='w-[1100px] h-[500px] p-4'
              src={assets.app}
              alt='/'
            />
          </div>
        </motion.div>
      </div>
      
        </div>    
  )
}

export default Animation