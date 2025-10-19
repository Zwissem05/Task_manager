import React from 'react'
import { assets } from '../assets/assests'

const Sponsors = () => {
    return (
        <div className='flex justify-center items-center w-20'>
            <div>
            <div className='flex justify-center items-center'>
                <h1>Duolingo</h1>
                <img src={assets.Duolingo} />
            </div>
            <div className='flex justify-center items-center'>
                <h1>Ford</h1>
                <img src={assets.Ford} />

            </div>
            <div className='flex justify-center items-center'>
                <h1>Shopify</h1>
                <img src={assets.Shopify} />

            </div>
            <div className='flex justify-center items-center'>
                <h1>Spotify</h1>
                <img src={assets.Spotify} />

            </div>
            </div>

        </div>
    )
}

export default Sponsors