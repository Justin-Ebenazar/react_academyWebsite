import './App.css'
import HeroPage from './heroPage.jsx'
import NavBar from './components/heroPage/navBar'
import PianoExplore from './components/pianoCoursePage/pianoExplore.jsx'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {

  return (
          <>
            <Router>
                <NavBar/>
                <Routes>
                  <Route path="/" element={<HeroPage />} />
                  <Route path="/pianoCourse" element={<PianoExplore />} />
                  {/* <Route path="*" element={<NotFoundPage />} /> */}
                </Routes>
            </Router>
          </>
  );
}

export default App;
