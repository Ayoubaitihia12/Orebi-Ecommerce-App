import React from 'react'
import { Link } from 'react-router-dom'
import { RiShoppingCart2Fill } from "react-icons/ri";
import { MdSwitchAccount } from "react-icons/md";
import { useSelector } from 'react-redux';

const Layout = () => {

    const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity);

    return (
        <div className='md:flex hidden z-50 fixed top-60 right-4 flex-col gap-4 text-gray-600'>

            <Link >
                <span className='flex flex-col items-center bg-white rounded-xl shadow-2xl p-3'>
                    <MdSwitchAccount size={25}/>
                    <span className="text-xs font-semibold font-titleFont">Profile</span>
                </span>
            </Link>
            
            <Link to='/cart'>
                <span className='flex flex-col items-center bg-white rounded-xl shadow-2xl p-3'>
                    <div className='relative'>
                        {
                        cartTotalQuantity > 0 && (
                        <span 
                            className='bg-gray-600 absolute top-[-10px] right-[-15px] py-0.5 px-1.5 text-white font-semibold rounded-full text-xs'>
                            {cartTotalQuantity}
                        </span> 
                        )    
                        }
                        
                        <RiShoppingCart2Fill size={25}/>
                    </div>
                    <span className="text-xs font-semibold font-titleFont">Cart</span>
                </span>
            </Link>

            
        </div>
    )
}

export default Layout