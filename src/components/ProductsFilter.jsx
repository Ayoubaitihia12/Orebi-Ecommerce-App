import React from 'react'
import Category from './Category'
import Colors from './Colors'
import Brand from './Brand'
import Price from './Price'

const ProductsFilter = () => {
  return (
    <div className='flex flex-col gap-6'>
        <Category/>
        <Colors/>
        <Brand/>
        <Price/>
    </div>
  )
}

export default ProductsFilter