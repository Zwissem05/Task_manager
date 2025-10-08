import Navbar from "./Components/Navbar"
import Text_section from "./Components/text_section"
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from "./Pages/Home"



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
