import { Link } from "react-router-dom"
import { useState } from "react"

const Topnav = () => {
  const [query, setQuery] = useState("")
  console.log(query)
  return (
    <div className="w-full mt-2 h-[10vh] relative flex justify-start items-center ml-[15%]" >
 <i className="text-zinc-400 font-in text-3xl ri-search-line"></i>

 <input 
  onChange={(e)=>setQuery(e.target.value)}
  value={query}
  className="w-[45%] text-zinc-200 mx-10 p-4 text-xl outline-none border-none bg-transparent" type="text" placeholder="Search Anything" />
   {query.length > 0 &&( 
    <i onClick={()=>setQuery("")} className="ri-close-fill text-zinc-400 text-3xl"></i>
   )}


 <div className="absolute w-[50%] overflow-auto max-h-[50vh] bg-zinc-200 top-[100%]">

{/* <Link className="font-semibold hover:text-black hover:bg-zinc-300 
w-[100%] text-zinc-600 p-4 flex justify-start items-center border-b-2 border-zinc-100">
  <img src="" alt="" />
  <span>Hello vattakai</span>
  </Link> */}



 </div>
    </div>
  )
}

export default Topnav