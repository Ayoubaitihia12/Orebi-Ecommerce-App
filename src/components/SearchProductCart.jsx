import React from 'react'

const SearchProductCart = ({img,productName,price,des}) => {

    return (
        <div className='flex items-center gap-4 bg-gray-100 py-2 cursor-pointer'>
            <img className='max-w-[110px]' src={img} alt={productName} />
            <div className='flex flex-col items-start gap-1'>
                <h1 className='font-semibold sml:text-lg text-md'>{productName}</h1>
                <p className='sml:text-sm text-xs'>{des}</p>
                <span>
                    Price: <span className='font-semibold'>${price}</span>
                </span>
            </div>
        </div>
    )
}

export default SearchProductCart