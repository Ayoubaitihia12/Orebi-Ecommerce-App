import React from 'react'
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import paymentCard  from '../assets/images/payment.png'

const Footer = () => {

    const icons = [
        {
            id: 1,
            icon : <FaFacebook size={18} color='white'/>,
        },
        {
            id: 2,
            icon : <FaYoutube size={18} color='white'/>,
        },
        {
            id: 3,
            icon : <FaLinkedin size={18} color='white'/>,
        },
        {
            id: 4,
            icon : <FaGithub size={18} color='white'/>,
        }
    ]

    const shop = [
        {
            id: 1,
            title : 'Accesories',
        },
        {
            id: 2,
            title : 'Clothes',
        },
        {
            id: 3,
            title : 'Electronics',
        },
        {
            id: 4,
            title : 'Home appliances',
        },
        {
            id: 5,
            title : 'New Arrivals',
        }
    ]

    const account = [
        {
            id: 1,
            title : 'Profile',
        },
        {
            id: 2,
            title : 'Orders',
        },
        {
            id: 3,
            title : 'Addresses',
        },
        {
            id: 4,
            title : 'Account Details',
        },
        {
            id: 5,
            title : 'Payment Options',
        }
    ]
    return (
        <div className='w-full bg-[#F5F5F3] py-20 px-10 flex flex-col gap-12'>
            <div className='grid xl:grid-cols-3 grid-cols-1 xl:items-start items-center xl:gap-6 gap-16'>

                <div className='flex flex-col xl:items-start items-center gap-4'>
                    <h3 className='font-semibold text-2xl'>More about Orebi Shop</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Enim sint ab ullam, numquam nesciunt in.
                    </p>
                    <div className='flex items-center gap-2'>
                        {
                            icons.map(({id,icon})=>(
                                <span className='bg-black w-7 h-7 rounded-full flex items-center justify-center' key={id}>{icon}</span>
                            ))
                        }
                    </div>
                </div>

                <div className='flex items-start justify-center xl:gap-10 gap-32'>
                    <div className='flex flex-col gap-6'>
                        <h3 className='font-semibold text-2xl'>Shop</h3>
                        <ul className='flex flex-col gap-4'>
                            {
                                shop.map(({id,title})=>(
                                    <li className="font-title text-md text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300" key={id}>{title}</li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <h3 className='font-semibold text-2xl'>Your account</h3>
                        <ul className='flex flex-col gap-4'>
                            {
                                account.map(({id,title})=>(
                                    <li className="font-title text-md text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300" key={id}>{title}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>

                <div className='flex flex-col gap-6 xl:items-end items-center'>
                    <h3 className='font-semibold text-2xl'>Subscribe to our newsletter.</h3>
                    <p>
                        A at pellentesque et mattis porta enim elementum.
                    </p>
                    <div className='flex items-center gap-4'>
                        <input className='outline-none bg-transparent border-gray-400 pb-3 border-b-[1.5px]' type="email" placeholder='insert your email' />
                        <button className='bg-black/90 hover:bg-black duration-300 text-white px-6 py-2'>Subscribe</button>
                    </div>
                    <img className='w-48' src={paymentCard} alt="payment" />
                </div>
                
                
            </div>

            <div className='flex items-center justify-center'>
                <p className='font-normal text-center text-lightText duration-200 md:text-md text-sm'>
                &copy; Copyright 2023 | Orebi shopping | All Rights Reserved
                </p>
            </div>
        </div>
    )
}

export default Footer