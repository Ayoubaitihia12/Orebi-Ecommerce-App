import React from 'react'
import ProductCart from './ProductCart'
import {SplOfferData} from '../data/data'

const SpecialOffers = () => {

    console.log(SplOfferData);

    return (
        <div className='max-w-full px-8 py-8 flex flex-col gap-6'>
            <h1 className='text-4xl font-semibold'>Special Offers</h1>

            <div className='grid xl:grid-cols-4 lgl:grid-cols-3 md:grid-cols-2 items-center gap-6'>
                {
                    SplOfferData.map((offer)=>(
                        <ProductCart key={offer._id} product={offer} />
                    ))
                }
                
            </div>
        </div>
    )
}

export default SpecialOffers