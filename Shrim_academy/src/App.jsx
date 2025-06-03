import './App.css'
import HeroPage from './heroPage.jsx'
import NavBar from './components/heroPage/navBar'
import PianoExplore from './components/pianoCoursePage/pianoExplore.jsx'
import GuitarExplore from './components/guitarCoursePage/guitarExplore.jsx'
import KeyboardExplore from './components/keyboardCoursePage/keyboardExplore.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
          <>
            <Router>
                <NavBar/>
                <Routes>
                  <Route path="/" element={<HeroPage />} />
                  <Route path="/pianoCourse" element={<PianoExplore />} />
                  <Route path="/guitarCourse" element={<GuitarExplore />} />
                  <Route path="/keyboardCourse" element={<KeyboardExplore />} />
                  {/* <Route path="*" element={<NotFoundPage />} /> */}
                </Routes>
            </Router>
          </>
  );
}

export default App;
