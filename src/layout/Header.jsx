import React from 'react'
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../components/theme/ThemeSwitcher'
import { CiShoppingBasket } from "react-icons/ci";
import { useCartCunsumer } from '../contexts/CartProvider';

function Header() {
  const { cartState:{ordersCount}} = useCartCunsumer();
  return (
    <div className="py-4 px-40 relative w-full">
      <img className='absolute -z-10 top-0 left-0 w-full h-full  object-cover' src="../../public/assets/AbstractDesign.svg" alt="bg-header" />
      <div className='w-full z-99 flex items-center justify-between'>
      <Link to={"/products"}>
        <h1 className='text-5xl font-semibold'>React Shop</h1>
      </Link>
      <div className='flex items-center justify-between'>
        <Link className='relative mx-6' to={'/checkout'}>
          <span className='absolute text-sm -top-2 -right-2 p-1 w-5 h-5 text-center leading-none rounded-full bg-purpleshade-400 text-white'>{ordersCount}</span>
          <CiShoppingBasket className='text-4xl bg-white dark:bg-grayshade-400 border border-grayshade-200 p-1 rounded-md' />
        </Link>
        <ThemeSwitcher/>
      </div>
      </div>
    </div>
  )
}

export default Header