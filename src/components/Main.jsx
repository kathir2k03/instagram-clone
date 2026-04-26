import Mainbar from "./Mainbar";
import MobileBottombar from "./MobileBottombar";
import MobileTopbar from "./MobileTopbar";
import Rightbar from "./Rightbar";
import Sidebar from "./Sidebar";

function Main(){
    return(
    <section className='md:flex w-full'>
    <div className='hidden md:block md:w-1/2 lg:w-1/5 px-3 py-4'>
    <Sidebar/>
    </div>
    <div className="block md:hidden">
        <MobileTopbar/>
    </div>
    <div className='w-full  md:w-1/3 lg:w-1/2'>
    <Mainbar/>
    </div>
    <div >
        <MobileBottombar/>
    </div>    
    <div className='w-full hidden md:block lg:w-1/4 px-3 py-4'>
    <Rightbar/>
    </div>
    </section>
    )
}

export default Main