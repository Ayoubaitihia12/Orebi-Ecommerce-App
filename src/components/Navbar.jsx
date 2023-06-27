import React, { useState } from 'react'
import {navBarList} from '../data/data'
import logo from '../assets/images/orebiLogo.png'
import logo_light from '../assets/images/logoLight.png'
import {HiMenuAlt2} from 'react-icons/hi'
import {AiOutlineClose} from 'react-icons/ai'
import { Link , useLocation } from 'react-router-dom'

const Navbar = () => {

    const [navbar,setNavbar] = useState(false);

    const location = useLocation();

    return (
        <div className='z-50 fixed top-0 left-0 bg-white w-full'>
            <div className='relative w-full border-b-[1px]'>
                <div className='max-w-full px-8 mx-auto h-20 flex items-center justify-between'>

                    <a href='/'>
                        <img className='w-[80px]' src={logo} alt="logo" />
                    </a>

                    <ul className='md:flex hidden items-center font-normal text-lightText'>
                        {
                            navBarList.map(({_id,title,link})=>(
                                <li 
                                className="flex font-normal hover:font-bold w-20 h-6 justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                                key={_id}
                                state={{ data: location.pathname.split("/")[1] }}
                                >
                                    <Link to={link}>
                                        <span>{title}</span>
                                    </Link>
                                    
                                </li>
                            ))
                        }
                    </ul>

                    <button 
                    className='block md:hidden'
                    onClick={()=>setNavbar(!navbar)}
                    >
                        <HiMenuAlt2 size={25}/>
                    </button>

                    {navbar && (<div className='fixed top-0 left-0 w-full h-screen bg-black/75' />)}

                    <div className={`z-50 absolute ${navbar ? 'left-0' : 'left-[-100%]'} top-0 w-[80%] bg-neutral-800 h-screen p-6 duration-700 ease-in-out`}>
                        <button 
                            className='absolute top-[7px] left-[101.5%] flex items-center justify-center p-[1.3px] border-[1px] border-white/70'
                            onClick={()=>setNavbar(!navbar)}
                            >
                            <AiOutlineClose className='text-white/70' size={30}/>
                        </button>
                        <img src={logo_light} alt="logo" />
                        <ul className='text-white/90 text-lg flex flex-col gap-2 mt-6'>
                            {
                                navBarList.map(({_id,title,link})=>(
                                    <li key={_id} className='w-full border-e-2'>
                                        <Link onClick={()=>setNavbar(false)} to={link}>
                                            <span>{title}</span>
                                        </Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Navbar