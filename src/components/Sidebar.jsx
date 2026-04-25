
function Sidebar(){

    return(
        <section className="sidebar font-normal text-lg">

        {/* logo */}

            <img src="/logo.png" alt="" className="h-[42px] w-[140px] mb-2"/>
        
        {/* menu-list */}

        <div>
            <i class="bi bi-house"></i> Home
        </div>
        <div>
            <i class="bi bi-search"></i> Search
        </div>
        <div>
            <i class="bi bi-compass"></i> Explore
        </div>
        <div>
            <i class="bi bi-play-btn"></i> Reels
        </div>
        <div>
            <i class="bi bi-chat-dots"></i> Messages
        </div>
        <div>
            <i class="bi bi-heart"></i> Notifications
        </div>
        <div>
            <i class="bi bi-plus-square"></i> Create
        </div>
        <div>
            <i class="bi bi-person-circle"></i> Profile
        </div>

         {/* bottom-section */}
        <div className="fixed bottom-0 mb-2">
        <div>
            <i class="bi bi-threads"></i> Threads
        </div>
        <div>
            <i class="bi bi-list"></i> More
        </div>
        </div>

        </section>
    )
}

export default Sidebar