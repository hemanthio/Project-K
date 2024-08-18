import Sidenav from "./partials/Sidenav"
import Topnav from "./partials/Topnav"


const Home = () => {
    document.title = "Movie | Homepage"
  return (
    <div className="flex overflow-hidden">
       <Sidenav />
       <div className="w-[80%] h-full">
       <Topnav />  
       </div>
   
    
   
 
  
     
   
     </div>
  )
}

export default Home