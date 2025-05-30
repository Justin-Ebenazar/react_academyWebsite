import { useState } from 'react'
import './App.css'
import HeroPage from './heroPage.jsx'
import NavBar from './components/heroPage/navBar'

function App() {
  const [count, setCount] = useState(0)

  return (
          <div>
              <NavBar/>
              <HeroPage/>
          </div>
  )
}

export default App;
