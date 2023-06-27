import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem';
import { useDispatch } from 'react-redux';
import {getTotals} from '../redux/cartSlice'

const CartContainer = () => {

    const cartItems = useSelector((state) => state.cart.cartItems);
    
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTotals());
    },[cartItems])
  

    return (
        <div className='w-full px-8'>
            <table className='w-full'>
                <tr className='text-left bg-gray-100 py-6 text-xl'>
                    <th className='py-6 px-4'>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Sub Total</th>
                </tr>
                {
                    cartItems.map((item)=>(
                        <CartItem key={item._id} {...item}/>
                    ))
                }
            </table>
        </div>
    )
}

export default CartContainer