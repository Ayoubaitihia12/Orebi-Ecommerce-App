import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CartTotal = () => {

    const cartTotalQAmount = useSelector((state) => state.cart.cartTotalQAmount);

    const shippingCharge = 30;

    return (
        <div className='mx-8 py-6 flex flex-col items-end justify-end gap-3 border-t-[1px]'>
            <div className='flex flex-col items-end gap-4'>
                <h3 className='font-bold text-2xl'>
                    Cart totals
                </h3>
                <div className='w-96 max-w-full flex flex-col font-semibold text-lg'>
                    <p className='border-[1px] border-b-0 border-black p-2 px-4 flex justify-between'>
                        Subtotal
                        <span className='font-bold'>${cartTotalQAmount}</span>
                    </p>
                    <p className='border-[1px] border-b-0 border-black p-2 px-4 flex justify-between'>
                        Shipping Charge
                        <span className='font-bold'>${shippingCharge}</span>
                    </p>
                    <p className='border-[1px] border-black p-2 px-4 flex justify-between'>
                        Total
                        <span className='font-bold'>${cartTotalQAmount + shippingCharge}</span>
                    </p>
                </div>
            </div>
            <Link className='bg-black/90 text-white py-2 px-7'>
                Proceed to Checkout
            </Link>
        </div>
    )
}

export default CartTotal