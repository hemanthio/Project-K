
import { Link } from 'react-router-dom'

const Sidenav = () => {

  

  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 ">

  <h1 className='text-2xl text-white font-bold'>
<i className='text-[#6556CD] ri-tv-fill mr-2 '></i>
<span className='text-2xl'>MOVIE </span>

 </h1>

  <nav className='flex flex-col text-zinc-400 text-xl'>
    <h1 className='text-white font-semibold text-xl mt-8 mb-5'>
      New Feed
    </h1>
    <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
    <i className='ri-fire-fill mr-2'></i>
    Trending
    </Link>

    <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
    <i className='ri-bard-fill mr-2'></i>
    Popular</Link>
  
    <Link  className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
    <i className='ri-movie-2-fill mr-2'></i>
    Movies</Link>

    <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5' >
    <i className='ri-tv-2-fill mr-2 '></i>
    Tv Shows</Link>

    <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5' >
    <i className='ri-team-fill mr-2'></i>
    Tv Shows</Link>
    

  </nav>


<hr className='border-none h[1px] bg-zinc-400' />

<nav className='flex flex-col text-zinc-400 text-xl'>
    <h1 className='text-white font-semibold text-xl mt-10  mb-5'>
      Website information
    </h1>
    <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
    <i className='ri-information-fill mr-2'></i>
    About 
    </Link>
      
    <Link className='hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-5'>
    <i className='ri-phone-fill mr-2'></i>
    Contact </Link>
  
   

   

  </nav>


    </div>
  )
}

export default Sidenav