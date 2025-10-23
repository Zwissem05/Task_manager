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

      <Navbar/>
      <Text_section/>
      <Sponsors/>
      <Fonctionalities />
      <About/>
      <Footer/>
    </div>
  )
}

export default Home