import pagenotfound from "../assets/404.png"

function NotFound() {
  return (
    <div className='w-full wrapper flex items-center justify-center flex-col'>
        <img className='lg:w-96 md:w-80 w-48' src={pagenotfound} alt="emptycart" />
        <p className='text-3xl font-extrabold'>404</p>
        <p className='lg:text-lg text-sm text-grayshade-100'>Oops! The page you're looking for can't be found.</p>
    </div>
  )
}

export default NotFound