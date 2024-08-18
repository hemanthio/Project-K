import Sidenav from "./partials/Sidenav"
import Topnav from "./partials/Topnav"
import { useState, useEffect } from "react"
import axios from '../utils/axios'
import Header from "./partials/Header"

const Home = () => {
    document.title = "Movie | Homepage"

 const [wallpaper, setwallpaper] = useState(null)

 const GetHeaderWallpaper = async () =>{
  try {
    const {data}= await axios.get(`/trending/all/day`)
    let randomdata = data.results[(Math.random()*data.results.length).toFixed()]

    setwallpaper(randomdata)
  } 
  catch (error) 
  {
console.log(error)
  }
 }

useEffect(()=>{
   !wallpaper && GetHeaderWallpaper()
},)

  return wallpaper ? (
    <div className="flex w-full ">
    <div className="w-[20%] h-full ">
    <Sidenav />
    </div>
       <div className="w-[80%] h-full">
       <Topnav /> 
       <Header data= {wallpaper} /> 
       </div>
   

     </div>
  ) : <h1>Loading</h1>
}

export default Home