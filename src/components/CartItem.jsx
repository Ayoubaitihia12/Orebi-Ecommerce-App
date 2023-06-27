import React from 'react'
import {RiCloseLine} from 'react-icons/ri'
import { useDispatch } from "react-redux";
import { increaseQuantity , drecreaseQuantity , removeFromCart } from '../redux/cartSlice';

const CartItem = ({_id,img,price,productName,totalPrice,quantity}) => {

    const dispatch = useDispatch();

    return (
        <tr className='border-[1px] border-gray-100'>
            <td>
                <div className='flex items-center gap-4 p-2'>
                    <span className='cursor-pointer hover:text-red-500 duration-300' onClick={()=>dispatch(removeFromCart(_id))}><RiCloseLine size={25}/></span>
                    <img className='w-[120px]' src={img} alt={productName} />
                    <h3 className='font-semibold text-lg'>{productName}</h3>
                </div>
            </td>
            <td>
                <span className='font-semibold text-lg'>${price}</span>
            </td>
            <td>
                <div className='flex items-center justify-between px-2.5 py-0.5 rounded-full gap-4 font-medium border-[1px] border-black w-[85px]'>
                    <button 
                        onClick={()=> dispatch(drecreaseQuantity(_id))}
                        className='text-2xl font-semibold'
                    >-</button>
                    <span className='font-normal text-lg'>{quantity}</span>
                    <button 
                        onClick={()=> dispatch(increaseQuantity(_id))} 
                        className='text-xl font-semibold'
                    >+</button>
                </div>
            </td>
            <td>
            <span className='font-bold text-lg'>${totalPrice}</span>
            </td>
        </tr>
    )
}

export default CartItem