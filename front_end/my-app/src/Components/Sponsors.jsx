import React from 'react'
import { assets } from '../assets/assests'
import {motion} from "framer-motion"

const Sponsors = () => {
  return (
    <div>
      
      
      <motion.div
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Bonjour Motion 🚀
</motion.div>
<motion.button
  whileHover={{ scale: 1.2, backgroundColor: "#ff4081" }}
  whileTap={{ scale: 0.9 }}
>
  Clique-moi 🎉
</motion.button>

<motion.ul initial="hidden" animate="visible" variants={{
  visible: { transition: { staggerChildren: 0.9 } }
}}>
  <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>1</motion.li>
  <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>2</motion.li>
  <motion.li variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>3</motion.li>
</motion.ul>
<motion.div
  initial={{ x: -200, y: -200, opacity: 0 }}
  animate={{ x: 400, y: 200, opacity: [1, 1, 0] }}
  transition={{ duration: 3, ease: "easeInOut" }}
  className="text-white text-2xl w-8"
>
  🚀
</motion.div>



    </div>
  )
}

export default Sponsors
