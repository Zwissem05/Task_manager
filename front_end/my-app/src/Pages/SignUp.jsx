import React from 'react'
import { assets } from '../assets/assests'
import { useNavigate } from 'react-router-dom'
import { useLocation } from "react-router-dom";
import { useEffect } from 'react';

import axios from 'axios'
// Configurer axios pour envoyer les credentials par défaut
axios.defaults.withCredentials = true;
import 'react-toastify/dist/ReactToastify.css'
import { toast} from 'react-toastify';
import { useState } from 'react';

const SignUp = () => {
  const navigate = useNavigate()
  const location=useLocation()
  const [email,setEmail]=useState("")
  const [name,setName]=useState("")
  const [password,setPassword]=useState("")

  const backendurl = import.meta.env.VITE_BACKEND_URL

  useEffect(() => {
    // Si on vient d'une autre page avec un email dans le state
    if (location.state && location.state.email) {
      setEmail(location.state.email);
    }
  }, [location.state]); // s'exécute quand la page se charge

  
  
  
    const onClick = async (e) => {
      try {
        window.location.href = backendurl + '/auth/google/signup';
      }
  
      catch (err) {
        toast(err.message)
  
      }
    }

     const onSubmitHandler= async (e) =>
      {
        try{
          e.preventDefault();
          const {data} = await axios.post(backendurl + '/auth/register',{name,email,password});
          if(data.success)
          {
           navigate('/')
          }
    
          
          else
            toast.warning(data.message)
        
          
        }
        catch(err)
        {
          toast(err.message)
    
        }
      }
    
  
  return (
    <div className=' min-h-screen  lg:flex  '>
      <div className='  bg-linear-gradient(to bottom, #0a0a2e, #141452) w-full text-white  lg:flex-[0_0_50%]'>
        <div className='px-10 '>
        <h1 className=' mt-8 lg:hidden'>Already have an account? <span className='underline cursor-pointer ' onClick={() => navigate('/SignIn')}>Sign in →</span></h1>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:mt-16  mt-4'>Create your free account</h1>
        <h2 className='mt-8 lg:mt-16 '>Explore Task Managment's features for individuals and organizations.</h2>
        </div>
        <div className='   lg:animate-fade2 mt-20'>
          <img src={assets.robot1} className='   animate-float w-[150px] mx-auto  ' />
          </div>

      </div>
      <div className='bg-white min-h-screen lg:px-16 px-10 xl:px-[100px]  py-4 lg:flex-[0_0_50%]'>
        <h1 className='mb-4 hidden lg:block text-right lg:mt-6'>Already have an account? <span className='underline cursor-pointer' onClick={() => navigate('/SignIn')}>Sign in →</span></h1>
        <h1 className='mb-5 mt-6  font-semibold text-xl'>Sign up for Task Mangament</h1>
                     <button onClick={onClick}  className=' flex justify-center bg-gray-100 w-full p-3 mt-10 rounded-md '>
                    <div className='flex  gap-3 items-center '>
                      <img className='w-5' src={assets.Google_icone} />
                      <h1 className=' font-semibold font-roboto text-gray-70'>Continue with Google</h1>
                    </div>
                  </button>
                  <div className='flex items-center mt-6'>
                    <div className='flex-1 h-px bg-gray-300'></div>
                    <span className='px-4 text-gray-600 font-medium'>or</span>
                    <div className='flex-1 h-px bg-gray-300'></div>
                  </div>

        <form onSubmit={onSubmitHandler}>
        {/* Email */}
        <h1 className='mt-4 font-roboto text-md'>Email*</h1>
        <div className='flex items-center rounded-sm border border-gray-400  gap-5 px-6 py-2 my-3 '>
          <img src={assets.mail_icon} alt='/' />
          <input
            className=' outline-none flex-1' type='text' placeholder='Email' value={email}   onChange={(e) => setEmail(e.target.value)} required />
        </div>

        {/* Password */}
        <h1 className='mt-4 font-roboto text-md'>Password*</h1>

        <div className='flex items-center rounded-sm border  border-gray-400  gap-5 px-6 py-2 my-3'>
          <img src={assets.lock_icon} alt='/' />
          <input
            className='bg-transparent outline-none flex-1' type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <h1 className='text-gray-600 my-4'>Password should be at least 15 characters OR at least 8 characters including a number and a lowercase letter.</h1>

        <h1 className='mt-4 font-roboto text-md'>Name*</h1>

        <div className='flex items-center rounded-sm border  border-gray-400  gap-5 px-6 py-2 my-3'>
          <img src={assets.person_icon} alt='/' />
          <input
            className='bg-transparent outline-none flex-1' type='Name' placeholder='Name' onChange={(e) => setName(e.target.value)} required />
        </div>
        <h1 className='text-gray-600 my-4'>Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.</h1>
          <button  type='submit' className='text-white w-full  rounded-md p-5 bg-gray-800 my-8 font-semibold text-lg cursor-pointer'>Create account </button>
        </form>
        <p className='text-sm text-gray-600' >By creating an account, you agree to the Terms of Service. For more information about GitHub's privacy practices, see the GitHub Privacy Statement. We'll occasionally send you account-related emails.</p>
      </div>


    </div>
  )
}

export default SignUp