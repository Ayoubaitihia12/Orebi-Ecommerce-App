import React from 'react'
import Product from '../assets/images/products/productOfTheYear.webp'
import { Link } from 'react-router-dom'

const ProductYear = () => {
  return (
      <div className="w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont">
        <img
          className="w-full h-full object-cover hidden md:inline-block"
          src={Product}
        />
        <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
          <h1 className="text-3xl font-semibold text-primeColor">
            Product of The year
          </h1>
          <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
            cupiditate modi amet! Facilis, aperiam quaerat.
          </p>
          <Link className='font-semibold px-12 py-3 bg-black/90 text-lg text-white' to='/shop'>
            Shop Now
          </Link>
        </div>
      </div>
  )
}

export default ProductYear