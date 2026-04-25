
import './App.css'
import Mainbar from './components/Mainbar'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'

function App() {


  return (
    <>
    <section className='flex w-full '>
    <div className='w-1/4 px-3 py-4'>
    <Sidebar/>
    </div>
    <div className='w-1/2 px-3 py-4'>
    <Mainbar/>
    </div>
    <div className='w-1/4 px-3 py-4'>
    <Rightbar/>
    </div>

    </section>
    </>
  )
}

export default App
