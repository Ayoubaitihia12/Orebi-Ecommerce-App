import React from 'react'
import ProductsHeaders from './ProductsHeaders'
import Products from './Products'
import ProductsFilter from './ProductsFilter'
import Pagination from './Pagination'

const ProdutsContainer = () => {

    return (
        <div className='px-8 grid mdl:grid-cols-4 gap-6'>
            <div className='mdl:block hidden'>
                <ProductsFilter/>
            </div>
            <div className='mdl:col-span-3'>
                <ProductsHeaders/>
                <Products  />
                <Pagination/>
            </div>
        </div>
    )
}

export default ProdutsContainer