import React from 'react'
import {GiRapidshareArrow} from 'react-icons/gi'
import {HiShoppingCart} from 'react-icons/hi'
import {BsBoxArrowInUpRight} from 'react-icons/bs'
import {AiFillHeart} from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {addToCart} from '../redux/cartSlice'

const ProductCart = ({product}) => {

    const dispatch = useDispatch();

    console.log(product);
    
    const links = [
        {
            id : 1,
            title : 'Compare',
            icon : <GiRapidshareArrow/>,
            action : false,
        },
        {
            id : 2,
            title : 'Add to Cart',
            icon : <HiShoppingCart/>,
            link : '/shop',
            action : true,
            actionType : addToCart(product),
        },
        {
            id : 3,
            title : 'View Details',
            icon : <BsBoxArrowInUpRight/>,
            link : `/product/${product._id}`,
            action : false

        },
        {
            id : 4,
            title : 'Add to Wish List',
            icon : <AiFillHeart/>,
            action : false,
        }
    ]

    return (
    <div className='border-[1px] group'>
        <div className='relative overflow-hidden cursor-pointer'>
            <img src={product.img} className='w-full' alt="" />
            {product.badge && (<span className='bg-black text-white px-8 py-1.5 absolute top-[25px] left-[25px] font-semibold'>New</span>)}
            
            <ul className='flex flex-col absolute group-hover:bottom-0 -bottom-[100%] duration-700 ease-in-out left-0 bg-white w-full text-lightText px-2'>
                {
                    links.map(({id,title,icon,link,action,actionType})=>(
                        <Link to={link}>
                            <li key={id} onClick={()=> action && dispatch(actionType) } className='py-1 border-b-[1px] w-full flex justify-end'>
                                <span className='flex items-center gap-3'>
                                    {title}
                                    {icon}
                                </span>
                            </li>
                        </Link>
                    ))
                }
                
            </ul>
        </div>
        <div className='px-3.5 py-5'>
            <span className='flex items-center justify-between'>
                <h1 className='font-bold text-xl'>{product.productName}</h1>
                <h3 className='text-lightText'>${product.price}</h3>
            </span>
            <span className='text-lightText text-sm'>{product.color}</span>
        </div>
    </div>
  )
}

export default ProductCart