import React from 'react'
import { Link } from 'react-router-dom'

const AboutContainer = () => {

    return (
        <div className='px-8 py-10 flex flex-col gap-4'>
            <p className='max-w-[550px] text-lightText'>
            <span className='font-semibold text-lg text-black'>Orebi </span>is one of the world's leading ecommerce brands and
                is internationally recognized for celebrating the essence
                of classic Worldwide cool looking style.
            </p>
            <Link to='/shop'>
                <button className='bg-black/90 text-white px-9 py-2.5 font-medium'>
                    Continue Shopping
                </button>
            </Link>
        </div>
    )
}

export default AboutContainer