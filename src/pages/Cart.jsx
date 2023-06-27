import React from 'react'
import Title from '../components/Title';
import Header from '../components/Header';
import CartContainer from '../components/CartContainer';
import {resetCart} from '../redux/cartSlice'
import { useDispatch , useSelector } from 'react-redux';
import CartTotal from '../components/CartTotal';
import { motion } from 'framer-motion';
import emptyCart from "../assets/images/emptyCart.png";
import { Link } from 'react-router-dom';

const Cart = () => {

  const dispatch = useDispatch();

  const cartTotalQuantity = useSelector((state)=> state.cart.cartTotalQuantity);

  return (
    <div className='max-w-full mt-20'>
      <Header/>
      <Title title="Cart"/>
      {
        cartTotalQuantity > 0 ? (
          <>
            <CartContainer/>
            <div className='px-8 py-6'>
              <button 
                onClick={()=>dispatch(resetCart())}
                className='bg-red-600 hover:bg-red-800 duration-200 text-white px-9 py-2 uppercase font-semibold'
              >
                Reset cart
              </button>
            </div>
            <CartTotal/>
          </>
        ):(
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col mdl:flex-row justify-center items-center gap-4 pb-20 px-8"
          >
            <div>
              <img
                className="w-80 rounded-lg p-4 mx-auto"
                src={emptyCart}
                alt="emptyCart"
              />
            </div>
            <div className="max-w-[500px] p-4 py-8 bg-white flex gap-4 flex-col items-center rounded-md shadow-lg">
              <h1 className="font-titleFont text-xl font-bold uppercase">
                Your Cart feels lonely.
              </h1>
              <p className="text-sm text-center px-10 -mt-2">
                Your Shopping cart lives to serve. Give it purpose - fill it with
                books, electronics, videos, etc. and make it happy.
              </p>
              <Link to="/shop">
                <button className="bg-primeColor rounded-md cursor-pointer hover:bg-black active:bg-gray-900 px-8 py-2 font-titleFont font-semibold text-lg text-gray-200 hover:text-white duration-300">
                  Continue Shopping
                </button>
              </Link>
            </div>
          </motion.div>
        )
      }
      
    </div>
  )
}

export default Cart