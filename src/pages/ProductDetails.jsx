import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {paginationItems} from '../data/data'
import { useDispatch , useSelector } from 'react-redux'
import {addToCart,getTotals} from '../redux/cartSlice'

const ProductDetails = () => {

    const {id} = useParams();

    const [product,setProduct] = useState();

    useEffect(()=>{
        setProduct(paginationItems.filter(e => e._id == id));
    },[id]);

    const cartItems = useSelector((state) => state.cart.cartItems);

    const dispatch = useDispatch();


    useEffect(()=>{
        dispatch(getTotals());
    },[cartItems]);


    console.log(product);

    return (
        <div className='max-w-full mt-20 px-8 py-10'>
            {
            product && (
                <div className='grid lg:grid-cols-3 md:grid-cols-2 items-center lgl:gap-12 gap-8'>
                    <div>
                        <img className='w-full' src={product[0].img} alt="product" />
                    </div>
                    <div className='flex flex-col items-start gap-4 lg:col-span-2'>
                        <h1 className='text-5xl font-semibold'>{product[0].productName}</h1>
                        <h3 className='text-xl font-semibold'>${product[0].price}</h3>
                        <p className='w-[80%]'>{product[0].des}</p>
                        <p>Be the first to leave a review.</p>
                        <span className='text-xl'>
                            Colors: <span className='font-medium'>{product[0].color}</span>
                        </span>
                        <button
                            className='bg-black/90 px-20 py-3 text-white lg:text-xl text-lg'
                            onClick={() => dispatch(addToCart(product[0]))}
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>

            )
            }
            
        </div>
    )
}

export default ProductDetails