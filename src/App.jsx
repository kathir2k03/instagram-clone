
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css'
import Mainbar from './components/Mainbar'
import Rightbar from './components/Rightbar'
import Sidebar from './components/Sidebar'
import StoryView from './components/StoryView'
import PageNotFound from './components/PageNotFound'
import Main from './components/Main'

function App() {
const route = createBrowserRouter(
  [
    {
     path : "/",
     element : <Main/>
    },
    {
      path : `/story/:id`,
      element : <StoryView/>
    },
    {
      path : '/*',
      element : <PageNotFound/>
    }
  ]
)
  return (
    <>
    <RouterProvider router={route} />
    </>
  )
}

export default App

// json server setup and command

// npm install -g json-server
// create folder in outside of public name db
// cd db 
// json-server --watch db.json --port 3000
