import React from 'react'

function NoProductFound() {
  return (
    <div className='w-full flex items-center justify-center flex-col text-center col-start-2 col-end-3 self-start'>
        <img className='w-96' src="../../public/assets/searchnotfound.png" alt="emptycart" />
        <p className='text-3xl font-extrabold'>No results found</p>
        <p className='text-lg text-grayshade-100'>Please try again.</p>
    </div>
  )
}

export default NoProductFound