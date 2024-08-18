

// const Header = ({data})=>{
//     console.log(data)
//     return(
// <div 
// style={{

import { Link } from "react-router-dom";

    
//     backgroundImage:`url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
//     backgroundSize:'cover',
//     backgroundPosition:'center'
// }}
// className='w-full h-[60vh]'
// >
//     header
// </div>
//     )
// }

// export default Header


const Header = ({ data }) => {
    console.log(data);
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(https://image.tmdb.org/t/p/original/${data?.backdrop_path})`,
                backgroundSize: 'cover',
                backgroundPosition: 'top 20%',
                backgroundRepeat:"no-repeat"
            }}
            className="w-full h-[70vh] flex flex-col justify-end items-start p-[5%]"
        >
         <h1 className=" w-[70%] text-4xl font-bold text-white">{data.name || 
         data.title ||
          data.original_name ||
          data.original_title
          }</h1>
          <p 
          
        //   style={{
        //                 display: '-webkit-box',
        //                 WebkitLineClamp: 3, // Limits to 3 lines
        //                 WebkitBoxOrient: 'vertical',
        //                 overflow: 'hidden',
        //                 textOverflow: 'ellipsis',
        //             }}
          
           className="w-[60%] mt-3 text-white"> {data.overview.slice(0,200)}... <Link className="text-blue-400">more</Link> 

           </p>

           <p className="text-white mt-1 mb-2">
            <i className="text-yellow-500 ri-megaphone-fill"></i>{""}
            {data.release_date || "No information"}
            <i className="text-yellow-500 ml-5 ri-album-fill"></i>
            {data.media_type.toUpperCase()}
           </p>
           <Link className="p-3 rounded-lg text-white  bg-[#6556CD]" >Watch Trailer</Link>
        </div>
    );
};

export default Header;
