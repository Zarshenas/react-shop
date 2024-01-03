import React from 'react'

function NoProductFound() {
  return (
    <div className='w-full wrapper flex items-center justify-center flex-col text-center col-start-2 col-end-3'>
        <img className='w-96' src="../../public/assets/searchnotfound.png" alt="emptycart" />
        <p className='text-3xl font-extrabold'>404</p>
        <p className='text-lg text-grayshade-100'>Oops! The page you're looking for can't be found.</p>
    </div>
  )
}

export default NoProductFound