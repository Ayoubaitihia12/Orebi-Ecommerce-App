import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import SpecialOffers from '../components/SpecialOffers'
import ProductYear from '../components/ProductYear'
import SalesImg from '../components/SalesImg'

const Hero = () => {
  
  return (
    <div className='max-w-full mt-20'>
        <Header/>
        <Main/>
        <SalesImg/>
        <SpecialOffers/>
        <ProductYear />
    </div>
  )
}

export default Hero