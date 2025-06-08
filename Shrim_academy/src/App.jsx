import './App.css'
import HeroPage from './heroPage.jsx'
import NavBar from './components/heroPage/navBar'
import PianoExplore from './components/pianoCoursePage/pianoExplore.jsx'
import GuitarExplore from './components/guitarCoursePage/guitarExplore.jsx'
import KeyboardExplore from './components/keyboardCoursePage/keyboardExplore.jsx'
import PianoCourse from './components/newPianoCourse/pianoCourse.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ModelCanvas from './components/3dmodel/modelCanvas'
function App() {

  return (
          <>
            <Router>
                <NavBar/>
                <Routes>
                  <Route path="/" element={<HeroPage />} />
                  <Route path="/mode" element={<ModelCanvas />} />
                  <Route path="/mode2" element={<PianoCourse />} />
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
