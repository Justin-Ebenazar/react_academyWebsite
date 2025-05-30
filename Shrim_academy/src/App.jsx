import { useState } from 'react'
import NavBar from './components/navBar'
import IntroAcademy from './components/introAcademy'
import Courses from './components/courses'
import PianoExplore from './components/pianoExplore'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
              <div>
                  <NavBar/>
                  <IntroAcademy/>
                  <Courses/>
                  <PianoExplore/>
              </div>
  )
}

export default App
