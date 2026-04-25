
import './App.css'
import Mainbar from './components/Mainbar'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'

function App() {


  return (
    <>
    <section className='flex w-full '>
    <div className='w-1/5 px-3 py-4'>
    <Sidebar/>
    </div>
    <div className='w-1/2'>
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

// json server setup and command

// npm install -g json-server
// create folder in outside of public name db
// cd db 
// json-server --watch db.json --port 3000
