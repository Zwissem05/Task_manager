import React from 'react'
import { assets } from '../assets/assests'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()
  return (
    <div className=' min-h-screen  lg:flex  '>
      <div className=' relative bg-linear-gradient(to bottom, #0a0a2e, #141452) w-full text-white p-10 lg:flex-[0_0_50%]'>
        <h1 className='mb-4 md:hidden'>Already have an account? <span className='underline cursor-pointer' onClick={() => navigate('/SignIn')}>Sign in →</span></h1>
        <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl mt-16'>Create your free account</h1>
        <h2 className='mt-10 '>Explore Task Managment's features for individuals and organizations.</h2>
          <img src={assets.robot1} className=' lg:animate-float  w-[150px] mx-auto my-10   lg:mt-52 ' />

      </div>
      <div className='bg-white min-h-screen  px-10 lg:px-32 py-4 lg:flex-[0_0_50%]'>
        <h1 className='mb-4 hidden lg:block text-right'>Already have an account? <span className='underline cursor-pointer' onClick={() => navigate('/SignIn')}>Sign in →</span></h1>
        <h1 className='my-5  font-bold text-xl'>Sign up for Task Mangament</h1>
        {/* Email */}
        <h1 className='mt-4 font-roboto text-md'>Email*</h1>
        <div className='flex items-center rounded-sm border border-gray-400  gap-5 px-6 py-2 my-3 '>
          <img src={assets.mail_icon} alt='/' />
          <input
            className=' outline-none flex-1' type='text' placeholder='Email' required />
        </div>

        {/* Password */}
        <h1 className='mt-4 font-roboto text-md'>Password*</h1>

        <div className='flex items-center rounded-sm border  border-gray-400  gap-5 px-6 py-2 my-3'>
          <img src={assets.lock_icon} alt='/' />
          <input
            className='bg-transparent outline-none flex-1' type='password' placeholder='Password' required />
        </div>
        <h1 className='text-gray-600 my-4'>Password should be at least 15 characters OR at least 8 characters including a number and a lowercase letter.</h1>

        <h1 className='mt-4 font-roboto text-md'>Email*</h1>

        <div className='flex items-center rounded-sm border  border-gray-400  gap-5 px-6 py-2 my-3'>
          <img src={assets.person_icon} alt='/' />
          <input
            className='bg-transparent outline-none flex-1' type='password' placeholder='Password' required />
        </div>
        <h1 className='text-gray-600 my-4'>Username may only contain alphanumeric characters or single hyphens, and cannot begin or end with a hyphen.</h1>
        <div className='rounded-md p-4 bg-gray-800 my-8'>
          <h1 className='text-white text-center font-semibold text-lg'>Create account </h1>
        </div>
        <p className='text-sm text-gray-600' >By creating an account, you agree to the Terms of Service. For more information about GitHub's privacy practices, see the GitHub Privacy Statement. We'll occasionally send you account-related emails.</p>
      </div>


    </div>
  )
}

export default SignUp