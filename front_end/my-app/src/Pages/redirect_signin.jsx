import React from 'react'
import { assets } from '../assets/assests'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
// Configurer axios pour envoyer les credentials par défaut
axios.defaults.withCredentials = true;
import 'react-toastify/dist/ReactToastify.css'
import { toast, ToastContainer } from 'react-toastify';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';


const Redirect_signin = () => {
    const [searchParams] = useSearchParams();

    // Récupération des valeurs passées dans l'URL
    const email = searchParams.get('email');
    const name = searchParams.get('name');
    const source = searchParams.get('source');
     const [emai, setEmai] = useState(email);
    
    const navigate = useNavigate()
    const backendurl = import.meta.env.VITE_BACKEND_URL
    const [password, setPassword] = useState('');

    const onClick = async (e) => {
        try {
            window.location.href = backendurl + '/auth/google/signin';

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
                        <h1 className='mt-4 font-roboto font-semibold text-md'>Email dress</h1>
                        <div className='flex items-center rounded-sm border border-gray-400  gap-5 px-6 py-2 my-3 '>
                            <img src={assets.mail_icon} alt='/' />
                            <input
                                className=' outline-none w-full' type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)}
                                value={emai} required />
                        </div>

                        <button onClick={() => navigate('/')} className='bg-green-700 w-full p-2.5 rounded-md mt-5 text-white'>Sign in</button>

                </div>

            </div>



        </div>
    )
}

export default Redirect_signin