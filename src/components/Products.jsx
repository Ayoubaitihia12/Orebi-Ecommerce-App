import React, { useContext, useEffect } from 'react'
import ProductCart from '../components/ProductCart'
import {productsContext} from '../pages/Shop'
import { useDispatch, useSelector } from 'react-redux'
import {getTotals} from '../redux/cartSlice'

const Products = () => {

    const {products} = useContext(productsContext);

    const cartItems = useSelector((state) => state.cart.cartItems);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getTotals());
    },[cartItems]);

    return (
        <div className='grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
            {
                products.map((product) =>(
                    <ProductCart key={product._id} product={product} />
                ))
            }
        </div>
    )
}

export default Products