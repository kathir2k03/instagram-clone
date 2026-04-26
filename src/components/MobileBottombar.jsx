import { Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"

function MobileBottombar() {

    return (
        <section className="block md:hidden fixed w-full bg-white bottom-0 ">
            <div className="py-1 px-3 bottom-icon-div bg-white text-white flex justify-between">
                <Link to="/"><i className="bi bi-house-door"></i></Link>
                <Link to="/reels"><i className="bi bi-play-btn"></i></Link>
                <Link to="/chat-lists"><i className="bi bi-send"></i></Link>
                <Link to="/search"><i className="bi bi-search"></i></Link>
                <Link to="/profile"><i className="bi bi-person-circle"></i></Link>
            </div>
        </section>
    )
}

export default MobileBottombar