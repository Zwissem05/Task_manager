import React from 'react'
import Navbar from '../Components/Navbar'
import Text_section from '../Components/text_section'
import Animation from '../Components/animation'
import Sponsors from '../Components/Sponsors'
import Fonctionalities from '../Components/Fonctionalities'
import About from '../Components/About'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-[#0a0a2e] to-[#141452]">
        <Navbar />
        <Text_section />
      </div>
      <Sponsors />
      <Fonctionalities />
      <About />
      <Footer />
    </div>
  )
}

export default Home