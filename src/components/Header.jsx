import React, { useEffect, useState } from 'react'
import {TbMenu} from 'react-icons/tb'
import {AiOutlineSearch , AiFillCaretDown} from 'react-icons/ai'
import SearchResults from './SearchResults'
import {MdAccountCircle} from 'react-icons/md'
import {BsCartDashFill} from 'react-icons/bs'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {paginationItems} from '../data/data'
import { useSelector } from 'react-redux'

const Header = () => {
  
  const links = [
    {
      id : 1,
      title : 'Accessories'
    },
    {
      id : 2,
      title : 'Furniture'
    },
    {
      id : 3,
      title : 'Electronics'
    },
    {
      id : 4,
      title : 'Clothes'
    },
    {
      id : 5,
      title : 'Bags'
    },
    {
      id : 6,
      title : 'Home appliances'
    }
  ]

  const login = [
    {
      id : 1,
      title : 'Login',
      link : '/',
    },
    {
      id : 2,
      title : 'Sign Up',
      link : '/',
    },
    {
      id : 3,
      title : 'Profile',
      link : '/',
    },
    {
      id : 4,
      title : 'Others',
      link : '/',
    }
  ] 
  const [products,setProducts] = useState([]);
  const [categoriesOpen,setCategoriesOpen] = useState(false);
  const [linksOpen,setlinksOpen] = useState(false);
  const [search , setSearch] = useState('');

  useEffect(()=>{
    const productFiltred = paginationItems.filter((item) => item.productName.toLowerCase().includes(search.toLowerCase()));
    setProducts(productFiltred);
  },[search])

  const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity);

  return (
    <div className='flex lg:flex-row flex-col px-8 lg:items-center items-start justify-between lg:gap-0 gap-4 bg-gray-100'>

      <div className='relative'>
        <div className='flex items-center gap-2 py-8'>
          <TbMenu onClick={()=>setCategoriesOpen(!categoriesOpen)} className='cursor-pointer' size={20}/>
          <span>Shop by Category</span>
        </div>

        {categoriesOpen && (
        <motion.ul 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`z-20 bg-black/80 text-white/80 flex-col p-5 absolute flex top-[120px] left-0 w-[250px]`}>
          {
            links.map(({id,title})=>(
              <li className='border-b-[1px] border-white/80 hover:border-white duration-300 py-2 px-5 cursor-pointer hover:text-white'>{title}</li>
            ))
          }
        </motion.ul>
        )}
      </div>

      <div className='relative lg:w-auto w-full'>

        <div className='bg-white flex items-center justify-between rounded-xl overflow-hidden'>
          <input 
            type="text" 
            placeholder='Search your products here'
            className='outline-none px-8 py-3 lg:w-[450px] w-full placeholder:text-sm'
            onChange={(e)=> setSearch(e.target.value)}
            value={search}
            />
          <button 
            type='button' 
            onClick={()=>alert("search")} 
            className='h-full px-4'
            >
            <AiOutlineSearch size={25}/>
          </button>
        </div>

        {search !== '' && 
        (<div className='z-20 absolute top-[100%] mt-4 shadow-lg bg-white left-0 max-w-full max-h-[400px] overflow-x-hidden'>
          <SearchResults products={products} />
        </div>)}

      </div>

      <div className='flex items-center gap-5'>

        <div className='relative flex items-center gap-0.5'>
          <MdAccountCircle size={25}/>
          <AiFillCaretDown onClick={()=>setlinksOpen(!linksOpen)} className='cursor-pointer'/>

          {linksOpen && (
          <motion.ul
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`z-20 bg-black/80 text-white/80 flex-col p-5 top-[80px] absolute flex lg:right-0 w-[180px]`}>
            {
              login.map(({id,title,link})=>(
                <li 
                  className='border-b-[1px] border-white/80 hover:border-white duration-300 py-2 px-5 cursor-pointer hover:text-white' 
                  key={id}
                >{title}</li>
              ))
            }
          </motion.ul>
          )}
        </div>

        <Link to="/cart">
          <div className='relative py-2'>
            <BsCartDashFill size={20}/>
            <span className='absolute -top-1 -right-2 bg-black text-white text-xs rounded-full px-1'>
              {cartTotalQuantity}
            </span>
          </div>
        </Link>
      </div>

    </div>
  )
}

export default Header