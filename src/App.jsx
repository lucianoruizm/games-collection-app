import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { GameDetails } from './pages/GameDetails';
import GameContextProvider from './contexts/GameContextProvider';
import { MainTitle } from './components/MainTitle';

function App() {
  
  return (
      <Router>
          <Navbar />
          <MainTitle />
        <Routes>
          <Route element={<GameContextProvider />}>
            <Route path='/' element={<LandingPage />} />
          </Route>
          <Route path='/games/details/:gameId' element={<GameDetails />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
