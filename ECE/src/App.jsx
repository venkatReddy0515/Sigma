import Home from './Components/Home'
import Events from './Components/Events'
import About from './Components/About'
import ListOfSchedule from './Components/ListOfSchedule'
import Navbar from './Components/Navbar'
import './App.css'

import {BrowserRouter as Router,Routes,Route} from "react-router-dom"

function App() {
  return (
    <>
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path='/Events' element={<Events/>}></Route>
          <Route path='/About' element={<About/>}></Route>
          <Route path='Schedule' element={<ListOfSchedule/>}></Route>
        </Routes>
    </Router>
      
    </>
  )
}

export default App
