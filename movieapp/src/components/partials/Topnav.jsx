
import { useState } from "react"
import { useEffect } from 'react'
import axios from '../../utils/axios'
import { Link } from 'react-router-dom'
import noimage from '../../../public/noimage.webp'

const Topnav = () => {
  const [query, setQuery] = useState("")
  const [searches, setSearches] = useState([])
 
  const GetSearches = async ()=>{
    try {
      const {data}= await axios.get(`/search/multi?query=${query}`)
   
      setSearches(data.results)
    } 
    catch (error) 
    {
console.log(error)
    }

   }


  useEffect(()=>{
      GetSearches()
  },[query])

  return (
//     <div className="w-full mt-2 h-[10vh] relative flex justify-start items-center ml-[15%]" >
//  <i className="text-zinc-400 font-in text-3xl ri-search-line"></i>

//  <input 
//   onChange={(e)=>setQuery(e.target.value)}
//   value={query}
//   className="w-[45%] text-zinc-200 mx-10 p-4 text-xl outline-none border-none bg-transparent" type="text" placeholder="Search Anything" />
//    {query.length > 0 &&( 
//     <i onClick={()=>setQuery("")} className="ri-close-fill text-zinc-400 text-3xl"></i>
//    )}


//  <div className="absolute w-[50%] overflow-auto max-h-[50vh] bg-zinc-200 top-[100%]">

//  {searches.map((search,index)=>(
//   <Link key={index} className="font-semibold hover:text-black hover:bg-zinc-300 
// w-[100%] left-[5%] text-zinc-600 p-4 flex justify-start items-center border-b-2 border-zinc-100">
//   <img 
//    className="w-[10vh] h-[10vh] object-cover mr-4 rounded shadow-lg"
//    src={
//     search.backdrop_path || search.profile_path ?
//     `
//     https://image.tmdb.org/t/p/original/${search.backdrop_path || search.profile_path} `
//     : 
//     noimage 

//     } alt="" />
//   <span>{
//     search.name || 
//     search.original_name ||
//     search.title ||
//     search.original_title
//     }</span>
//   </Link>
//  ))}

//  </div>
//     </div>


<div className="w-full mt-2 h-[10vh] relative flex justify-center items-center">
    <div className="flex w-[70%] items-center">
        <i className="text-zinc-400 font-in text-3xl ri-search-line"></i>

        <input 
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            className="w-full text-zinc-200 mx-4 p-4 text-xl outline-none border-none bg-transparent"
            type="text"
            placeholder="Search Anything"
        />

        {query.length > 0 && ( 
            <i onClick={() => setQuery("")} className="ri-close-fill text-zinc-400 text-3xl cursor-pointer"></i>
        )}
    </div>

    <div className="absolute w-[70%] overflow-auto max-h-[50vh] bg-zinc-200 top-[100%] left-[15%]">
        {searches.map((search, index) => (
            <Link 
                key={index} 
                className="font-semibold hover:text-black hover:bg-zinc-300 w-full text-zinc-600 p-4 flex justify-start items-center border-b-2 border-zinc-100"
            >
                <img 
                    className="w-[10vh] h-[10vh] object-cover mr-4 rounded shadow-lg"
                    src={
                        search.backdrop_path || search.profile_path
                            ? `https://image.tmdb.org/t/p/original/${search.backdrop_path || search.profile_path}`
                            : noimage
                    }
                    alt=""
                />
                <span>
                    {search.name || search.original_name || search.title || search.original_title}
                </span>
            </Link>
        ))}
    </div>
</div>


  )
}

export default Topnav