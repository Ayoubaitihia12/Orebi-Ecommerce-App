import React, { useState ,createContext } from 'react'
import Header from '../components/Header'
import Title from '../components/Title'
import ProdutsContainer from '../components/ProdutsContainer'
import {paginationItems} from '../data/data'

export const productsContext = createContext();

const Shop = () => {

  const [currentPage,setCurrentPage] = useState(1);
  const [productsPage,setProductsPage] = useState(12);

  const indexOfLastProduct =  currentPage * productsPage;
  const indexOfFirstProduct =  indexOfLastProduct - productsPage;
  const products = paginationItems.slice(indexOfFirstProduct,indexOfLastProduct);
  const numberOfPage = Math.round(paginationItems.length / productsPage);
  const totalProduct = paginationItems.length;

  
  return (
    <productsContext.Provider 
      value={{
        products,
        numberOfPage,
        indexOfLastProduct,
        indexOfFirstProduct,
        currentPage,
        setCurrentPage,
        totalProduct,
        setProductsPage,
      }} 
    >
      <div className='max-w-full mt-20'>
          <Header/>
          <Title title="Products"/>
          <ProdutsContainer />
      </div>
    </productsContext.Provider>
  )
}

export default Shop