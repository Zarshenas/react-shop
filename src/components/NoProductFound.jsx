import React from 'react';
import searchnotfound from '../assets/searchnotfound.png'

function NoProductFound() {
  return (
    <div className='w-full flex items-center justify-center flex-col text-center col-start-2 col-end-3 self-start'>
        <img className='lg:w-96 md:w-80 w-48' src={searchnotfound} alt="emptycart" />
        <p className='text-3xl font-extrabold'>No results found</p>
        <p className='lg:text-lg text-sm text-grayshade-100'>Please try again.</p>
    </div>
  )
}

export default NoProductFound