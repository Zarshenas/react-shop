import React from 'react'
import emptycart from "../assets/emptycart.png"

function EmptyCart() {
  return (
    <div className='w-full wrapper flex items-center justify-center flex-col'>
        <img className='lg:w-96 md:w-80 w-48' src={emptycart} alt="emptycart" />
        <p className='text-3xl font-extrabold'>Your cart is empty</p>
        <p className='lg:text-lg text-sm text-grayshade-100'>Start adding items to enjoy shopping!</p>
    </div>
  )
}

export default EmptyCart