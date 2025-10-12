import Navbar from "./Components/Navbar"
import Text_section from "./Components/text_section"
import { Route, Routes,BrowserRouter} from 'react-router-dom'
import Home from "./Pages/Home"
import SignUp from "./Pages/SignUp"
import './App.css';
import SignIn from "./Pages/SignIn"



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
            <Route path="/SignIn" element={<SignIn />} />


        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
