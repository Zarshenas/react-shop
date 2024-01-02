import React from 'react'

function EmptyCart() {
  return (
    <div className='w-full wrapper flex items-center justify-center flex-col'>
        <img className='w-96' src="../../public/assets/emptycart.png" alt="emptycart" />
        <p className='text-3xl font-extrabold'>Your cart is empty</p>
        <p className='text-lg text-grayshade-100'>Start adding items to enjoy shopping!</p>
    </div>
  )
}

export default EmptyCart