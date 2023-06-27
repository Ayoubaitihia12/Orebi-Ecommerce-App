import React from 'react'
import saleimg1 from '../assets/images/sale/saleImgOne.webp' 
import saleimg2 from '../assets/images/sale/saleImgTwo.webp' 
import saleimg3 from '../assets/images/sale/saleImgThree.webp' 
import { Link } from 'react-router-dom'

const SalesImg = () => {

    return (
        <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
            <div className="w-full md:w-2/3 lg:w-1/2 h-full">
                <Link to='/shop'>
                    <img className="h-full w-full object-cover" src={saleimg1} alt="saleimg1" />
                </Link>
            </div>
            <div className="w-full md:w-2/3 lg:w-1/2 h-auto flex flex-col gap-4 lg:gap-10">
                <div className="h-1/2 w-full">
                    <Link to='/shop'>
                        <img className="h-full w-full object-cover"  src={saleimg2} alt="saleimg2" />
                    </Link>
                </div>
                <div className="h-1/2 w-full">
                    <Link to='/shop'>
                        <img className="h-full w-full object-cover"  src={saleimg3} alt="saleimg3" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default SalesImg