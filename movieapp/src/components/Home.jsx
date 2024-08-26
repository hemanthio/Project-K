import Sidenav from "./partials/Sidenav"
import Topnav from "./partials/Topnav"
import { useState, useEffect } from "react"
import axios from '../utils/axios'
import Header from "./partials/Header"
import HorizontalCards from "./partials/HorizontalCards"

const Home = () => {
    document.title = "Movie | Homepage"

 const [wallpaper, setwallpaper] = useState(null)
 const [trending, settrending] = useState(null)

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

 
const GetTrending= async () =>{
  try {
    const {data}= await axios.get(`/trending/all/day`)
  

    settrending(data.results)
  } 
  catch (error) 
  {
console.log(error)
  }
 }

console.log(trending)
useEffect(()=>{
   !wallpaper && GetHeaderWallpaper()
   !trending && GetTrending()
},)





  return wallpaper && trending ? (
    <div className="flex w-full ">
    <div className="w-[20%] h-full ">
    <Sidenav />
    </div>
       <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
       <Topnav /> 
       <Header data= {wallpaper} /> 
       <HorizontalCards  data= {trending}/>
       </div>
   

     </div>
  ) : <h1>Loading</h1>
}

export default Home