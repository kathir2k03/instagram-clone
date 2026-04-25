import Feeds from "./Feeds"
import Stories from "./Stories"

function Mainbar(){

    return(
        <>
        <div>
            <Stories/>
        </div>
        <div>
            <Feeds/>
        </div>
        </>
    )
}

export default Mainbar