import { Link } from "react-router-dom"

const HorizontalCards = ({data}) => {
  return (
    <div className='w-full h-[40vh] p-4 '>
    <div className='mb-5'>
    <h1 className=' text-2xl text-zinc-400 font-semibold '>Trending</h1>
    </div>


    <div className='w-[100%] flex h-[50vh] overflow-y-hidden'>
     {data.map((s,i)=>(
        
        <div key={i} className='min-w-[20%] h-full bg-zinc-900 mr-1'>
        <img 
         className="w-full h-[55%] object-cover"
         src={`https://image.tmdb.org/t/p/original/${s?.backdrop_path || s.poster_path }`} alt="" />
        <h1 className=" text-lg font-bold text-white">
        {s.title  || 
            s.name ||
            s.original_name ||
            s.original_title }
        </h1>

        <p 
           className=" mt-3 text-sm opacity-55 text-white"> {s.overview.slice(0,100)}... <Link className="text-blue-400">more</Link> 

           </p>
        
        </div>
     ))}
    </div>


    </div>
  )
}

export default HorizontalCards