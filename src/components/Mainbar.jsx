import Feeds from "./Feeds"
import Stories from "./Stories"

function Mainbar(){

    return(
        <>
        <div className="ml-2 md:ml-0">
            <Stories/>
        </div>
        <div className="px-2 md:px-0">
            <Feeds/>
        </div>
        </>
    )
}

export default Mainbar