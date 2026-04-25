import { useEffect, useState } from "react"

const Feeds = () =>{

    const [posts, setPosts] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        setTimeout(() =>{
    fetch('http://localhost:3000/posts')
    .then((res) => {
        if(res.ok == false){
          setLoading(false)  
          setError(res.statusText)
        }
       return res.json()     
     })
    .then((result) => {
        setLoading(false)
        setPosts(result)
    })
    .catch((err) => setError(err))
        },1000)
    },[])

    console.log(posts)
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
            <div className="">
                <div className="flex gap-2">
                    <img className="h-[30px] w-[30px] rounded-full" src={data.user.profile_pic} alt="" />
                    <p className=" font-semibold">{data.user.username}</p>
                </div>
                <img src={data.image}></img>
                <div className="flex text-[20px] gap-1 items-center">
                  <i class="bi bi-heart cursor-pointer"></i>
                  <i class="bi bi-chat cursor-pointer"></i>
                  <i class="bi bi-send cursor-pointer"></i>
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