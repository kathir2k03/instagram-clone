import { useNavigate, useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"

const StoryView = () =>{
    const navigate = useNavigate()
    const {id} = useParams()
    const [story, error, loading] = useFetch(`https://instagram-clone-backend-64c5.onrender.com/storyLists/${id}`) 
    if(loading){
        return(
            <></>
        )
    }    
    if(error){
        return(
            <></>
        )
    }

    return(
        <section className="w-full h-[100vh]">
            <div onClick={() => navigate(-1)} className="absolute m-3 z-10">
                <i className="bi bi-arrow-left-circle cursor-pointer text-white text-3xl "></i>
            </div>
                <div className="absolute z-9 m-4 pl-10 text-white">
                    <div className="flex gap-2">
                    <img className="h-[30px] mt-2 w-[30px] rounded-full" src={story.profile_pic} alt="" />
                    <div>
                    <p className="m-0 font-semibold">{story.username}</p>
                    <p className="mt-[-40px] z-9 text-sm">{new Date(story.timestamp).toLocaleTimeString('en-IN')}</p>
                    </div>
                    </div>
                       
                </div> 
                             
            <div className="relative flex justify-center">
                <img className="w-auto z-5 h-[100vh]" src={story.image} alt="" />
                <div className="absolute inset-0 bg-black/100 rounded"></div>
            </div>
        </section>
    )
}

export default StoryView