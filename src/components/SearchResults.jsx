import React from 'react'
import SearchProductCart from './SearchProductCart'
import { Link } from 'react-router-dom'

const SearchResults = ({products}) => {
  return (
    <div className='flex flex-col gap-4'>
      {
        products.map((item)=>(
          <Link to={`/product/${item._id}`}>
            <SearchProductCart key={item._id} {...item} />
          </Link>
          
        ))
      }
    </div>
  )
}

export default SearchResults