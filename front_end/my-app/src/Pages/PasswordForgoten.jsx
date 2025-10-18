import React, { useState, useRef} from 'react'
import { assets } from '../assets/assests'
import axios from 'axios'
import { Navigate, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const PasswordForgoten = () => {
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState(0)
  const [password, setPassword] = useState('')
  const [isemailsent, setIsemailsent] = useState(false)
  const navigate=useNavigate()
  const [isotpsent, setIsotpsnet] = useState(false)

  const backendurl = import.meta.env.VITE_BACKEND_URL

  const onSubmitEmail = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(backendurl +'/auth/send-resetOtp', { email })
      if (data.success){
        toast.success(data.message)
        setIsemailsent(true)
      }
      else
      {
      toast.warning(data.message);      }

    } catch (error) {
      toast(error.message)
    }



  }

  const onSubmitOtp = async (e) => {
    e.preventDefault();
      const otpArray = inputRefs.current.map(e => e.value)
      setOtp(otpArray.join(''))     
      setIsotpsnet(true)
  }

  const onSubmitPassword = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(backendurl + '/auth/verify-resetOtp', { email,resetOtp:otp,newPassword:password})
      if (data.success){
        toast.success(data.message)
        navigate('/')
      }
      else
        toast(data.message)

    } catch (error) {
      toast(error.message)
    }

  }



  const inputRefs = React.useRef([])

  const handleinput = (e, index) => {
    if (e.target.value.length > 0 && index < inputRefs.current.length - 1) {
      inputRefs.current[index + 1].focus()
    }
  }
  const handleKeyDown = (e, index) => {
    if (e.key == 'Backspace' && e.target.value == '' && index > 0)
      inputRefs.current[index - 1].focus()

  }
  const handlePaste = (e) => {
    const paste = e.clipboardData.getData('text')
    const pasteArray = paste.split('')
    pasteArray.forEach((char, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = char;
      }
    })
  }

  return (
    <div className='min-h-screen bg'>    
      {!isemailsent &&
        <form onSubmit={onSubmitEmail} className='bg-slate-900 flex flex-col items-center text-white mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl  rounded-md py-16 px-8 mt-32'>
          <h1 className='text-center '>Reset Password</h1>
          <div className='flex gap-8 bg-[#333A5C]  rounded-full px-6 py-2 my-10 w-full'>
            <img className='' src={assets.mail_icon} />
            <input className='w-full bg-transparent'
              type='Email' placeholder='Email' required
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <button
          type='submit'
            className='bg-gradient-to-br from-indigo-500 to-indigo-900 rounded-full w-[150px] py-2 hover:to-white transition duration-300 
                    '>Suivant</button>
        </form>
      }


      {!isotpsent && isemailsent &&
        <form onSubmit={onSubmitOtp}
          className='bg-slate-900 flex flex-col items-center  text-white mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl my-24 rounded-md py-20 px-8'>
          <h1 className='text-center py-2 '> Email Verify Otp</h1>
          <h2 className='text-purple-300 py-5'>Enter the Otp of 6 digit to verify tour Email</h2>
          <div className='flex  gap-2 mb-5'>
            {Array(6).fill(0).map((_, index) => (
              <input type='text' maxLength={1} key={index} required
                className='w-12 h-12 bg-[#333A5C] rounded-md text-center '
                onPaste={handlePaste}

                ref={e => inputRefs.current[index] = e}
                onInput={(e) => handleinput(e, index)}
                onKeyDown={(e) => handleKeyDown(e, index)}
              />
            ))}

          </div>
          <h1>Did not receive Otp <span onClick={onSubmitEmail} className='underline cursor-pointer text-blue-400 '>Resend Otp password</span></h1>
          <button type='submit' className=' mt-3 bg-gradient-to-br from-indigo-500 to-indigo-900 rounded-full w-[150px] py-2 hover:to-white transition duration-300 
                    '>Suivant</button>
        </form>
      }

      {isotpsent && isemailsent && 
        <form onSubmit={onSubmitPassword} className='bg-slate-900 flex flex-col items-center text-white mx-auto max-w-md sm:max-w-lg md:max-w-xl lg:max-w-xl my-24 rounded-md  px-8'>
          <h1 className='text-center p-5 '>Reset Password</h1>
          <h2 className='text-purple-300'>Enter your new password here</h2>
          <div className='flex gap-8 bg-[#333A5C]  rounded-full px-6 py-2 my-10 w-full '>
            <img className='' src={assets.lock_icon} />
            <input className='w-full bg-transparent'
              type='password' placeholder='Password' required
              value={password}
              onChange={e => setPassword(e.target.value)}

            />
          </div>
          <button
            className='bg-gradient-to-br from-indigo-500 to-indigo-900 rounded-full w-[150px] py-2 hover:to-white transition duration-300 
                    '>Suivant</button>
        </form>
      }
        <div className='   lg:animate-fade2'>
                <img src={assets.robot1} className='   animate-float w-[150px] mx-auto  ' />
                </div>



    </div>
  )
}

export default PasswordForgoten