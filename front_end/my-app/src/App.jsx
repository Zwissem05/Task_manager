import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from "./Pages/Home"
import SignUp from "./Pages/SignUp"
import './App.css';
import SignIn from "./Pages/SignIn"
import PasswordForgoten from "./Pages/PasswordForgoten"
import { ToastContainer } from "react-toastify"
import Redirect_signup from './Pages/redirect_signup';
import Redirect_signin from './Pages/redirect_signin';





function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/ForgotPassword" element={<PasswordForgoten />} />
          <Route path="/ForgotenPassword" element={<PasswordForgoten />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App
