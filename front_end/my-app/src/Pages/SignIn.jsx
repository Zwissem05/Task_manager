import { assets } from '../assets/assests'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// Configurer axios pour envoyer les credentials par défaut
axios.defaults.withCredentials = true;
import 'react-toastify/dist/ReactToastify.css'

import { toast, ToastContainer } from 'react-toastify';

const SignIn = () => {
  const navigate = useNavigate()
  const backendurl = import.meta.env.VITE_BACKEND_URL



  const onClick = async (e) => {
    try {
      window.location.href = backendurl + '/auth/google';
    }

    catch (err) {
      toast(err.message)

    }
  }

  return (
    <div className=' bg-white min-h-screen  mx-auto '>
      <div className=' flex flex-col items-center max-w-[400px] mx-auto '>
        <img src={assets.logo} className='w-14 mx-auto mt-16' />
        <h1 className='my-5  font-roboto font-bold text-lg'>Sign up for Task Mangament</h1>
        <div className='w-full border-gray-950 '>
          {/* Email */}
          <h1 className='mt-4 font-roboto font-semibold text-md'>Email adress</h1>
          <div className='flex items-center rounded-sm border border-gray-400  gap-5 px-6 py-2 my-3 '>
            <img src={assets.mail_icon} alt='/' />
            <input
              className=' outline-none' type='text' placeholder='Email' required />
          </div>

          {/* Password */}
          <div className='flex items-center justify-between'>
            <h1 className='mt-4 font-roboto text-md font-semibold'>Password</h1>
            <span className=' cursor-pointer text-blue-500' onClick={() => navigate('/ForgotPassword')}>Forgot password? </span>

          </div>

          <div className='flex items-center rounded-sm border  border-gray-400  gap-5 px-6 py-2 my-3'>
            <img src={assets.lock_icon} alt='/' />
            <input
              className='bg-transparent outline-none  ' type='password' placeholder='Password' required />
          </div>
          <button className='bg-green-700 w-full p-2.5 rounded-md mt-5 text-white'>Sign in</button>

          <div className='flex items-center mt-6'>
            <div className='flex-1 h-px bg-gray-300'></div>
            <span className='px-4 text-gray-600 font-medium'>or</span>
            <div className='flex-1 h-px bg-gray-300'></div>
          </div>
          <button onClick={onClick} className=' flex justify-center bg-gray-100 w-full p-3 mb-8 mt-6 rounded-md '>
            <div className='flex  gap-3 items-center '>
              <img className='w-5' src={assets.Google_icone} />
              <h1 className=' font-semibold font-roboto text-gray-70'>Continue with Google</h1>
            </div>
          </button>
        </div>
        <h1>New to Task Managment? <span onClick={() => navigate('/SignUp')} className='cursor-pointer underline text-blue-500'> Create an account</span></h1>

      </div>

    </div>
  )
}

export default SignIn