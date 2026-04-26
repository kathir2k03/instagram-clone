import { useState } from "react"
import useFetch from "../hooks/useFetch"
import { useNavigate } from "react-router-dom"

const Stories = () =>{
    const navigate = useNavigate()
     const [data, error, loading] = useFetch('https://instagram-clone-backend-64c5.onrender.com/storyLists')
     if(loading){
        return(
            <></>
        )
     }   
     
     const yourStory = data[0]

     const storyLists = data.filter((data, index) =>{
       if(index !== 0){
        return data
       }
     })

     function storyViewHandle(id){
       navigate(`/story/${id}`) 
     }
    return(
        <section className="story-section mt-3 md:mt-4">
            <div className="flex gap-2 overflow-x-scroll no-scrollbar">
            <div onClick={() => storyViewHandle(yourStory.id)} className="cursor-pointer">
            <div className="cursor-pointer" className="story">
              <img src={yourStory.profile_pic} alt="" />
            </div>
            <p className="truncate text-center text-sm w-[70px]">Your story</p>                    
            </div>     
                
            {storyLists?.map((data) => (
            <div onClick={() => storyViewHandle(data.id)} className="cursor-pointer" key={data.id}>
            <div className="story">
              <img src={data.profile_pic} alt="" />
            </div>
            <p className="truncate text-sm text-center w-[70px]">{data.username}</p>                    
            </div>
                ))}
            </div>
        
        </section>
    )
}

export default Stories