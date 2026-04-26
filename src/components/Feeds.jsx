import { useEffect, useState } from "react"
import useFetch from "../hooks/useFetch"

const Feeds = () =>{
    const [data, error, loading] = useFetch('http://localhost:3000/posts')
    const posts = data || []

if(loading){
    return(
        <section className="feed-section w-full h-[75vh] flex justify-center items-center">
        <img src="/loading.webp" className="h-18 w-18" alt="Loadinng..." />
        </section>
    )
}

if(error){
        return(
            <section className="feed-section w-full h-[75vh] flex justify-center items-center">
            <h1>{error}</h1>
            </section>
        )
    }
    return(
        <section className="feed-section mt-3 mx-auto max-w-150">
         {posts.length > 1 ? 
         <>
         {posts.map((data) =>(
            <div className="" key={data.id}>
                <div className="flex gap-2">
                    <img className="h-[30px] w-[30px] rounded-full" src={data.user.profile_pic} alt="" />
                    <p className=" font-semibold">{data.user.username}</p>
                </div>
                <div className="relative">
                <img className="h-[350px] md:h-[500px] mx-auto w-auto" src={data.image}></img>                    
                    <div className="absolute inset-0 bg-black/5 rounded"></div>
                </div>

                <div className="flex text-[20px] gap-1 items-center">
                  <i className="bi bi-heart cursor-pointer"></i>
                  <i className="bi bi-chat cursor-pointer"></i>
                  <i className="bi bi-send cursor-pointer"></i>
                </div>
                <p className="font-bold h-[5px]">{data.likes} Likes</p>
                <p>{data.caption}</p>
            </div>
         ))}
         </>
         :
         <h1>No data Available</h1>
        }
        </section>
    )
}

export default Feeds