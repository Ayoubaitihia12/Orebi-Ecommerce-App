import React , {useContext} from 'react'
import {productsContext} from '../pages/Shop'

const Pagination = () => {

    const {numberOfPage,indexOfLastProduct,indexOfFirstProduct,totalProduct,setCurrentPage,currentPage} = useContext(productsContext);

    const pageNumers = [];

    for (let i = 1; i <= numberOfPage; i++) {
        pageNumers.push(i);
        
    }

    return (
        <div className='flex mdl:flex-row flex-col items-center justify-between w-full py-12 mdl:gap-0 gap-8'>
            <div className='flex items-center gap-4 '>
                {
                    pageNumers.map((number)=>(
                        <button 
                        onClick={() => setCurrentPage(number)} 
                        className={`${currentPage === number ? 'bg-black text-white' : 'border-[1px]'} px-3.5 py-2 duration-100 font-bold`}>
                            {number}
                        </button>
                   )) 
                }
            </div>
            <div>
                <span className='text-lightText'>
                    Products from {indexOfFirstProduct + 1} to {indexOfLastProduct} of {totalProduct}
                </span>
            </div>
        </div>
    )
}

export default Pagination