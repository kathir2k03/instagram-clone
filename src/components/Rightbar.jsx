
import useFetch from "../hooks/useFetch"

function Rightbar() {
    const [switchProfileData, switchProfileError, switchProfileLoading] = useFetch('https://instagram-clone-backend-64c5.onrender.com/switchProfile')
    const [suggestionsData, suggestionsError, suggestionsLoading] =useFetch('https://instagram-clone-backend-64c5.onrender.com/suggestions')    
    if(suggestionsLoading || switchProfileLoading){
        return(
            <>Loading...</>
        )
    }
    if(switchProfileError || suggestionsError){
        return(
            <>Server Error</>
        )
    }    
    return (
        <section className="right-section md:fixed md:w-1/3 lg:w-1/4 xl:w-1/5 ">
            {switchProfileData && switchProfileData.map((data) => (
                <div className="flex justify-between item-center" key={data.id}>
                    <div className="flex gap-1">
                        <img className="h-[30px] w-[30px] rounded-full" src={data.profile_pic} alt="" />
                        <p className="font-semibold">{data.username}</p>
                    </div>
                    <div>
                        <p className="text-primary cursor-pointer">Switch</p>
                    </div>
                </div>
            ))}
           <div className="flex justify-between">
            <p className="font-normal">Suggested for you</p>
            <b className="cursor-pointer">See All</b>
           </div>
             
            {suggestionsData.map((data) => (
                <div className="flex justify-between item-center my-1" key={data.id}>
                    <div className="flex gap-1">
                        <img className="h-[30px] w-[30px] rounded-full" src={data.profile_pic} alt="" />
                        <p className="font-semibold">{data.username}</p>
                    </div>
                    <div>
                        <p className="text-primary cursor-pointer">Follow</p>
                    </div>
                </div>
            ))}           
        </section>
    )
}

export default Rightbar