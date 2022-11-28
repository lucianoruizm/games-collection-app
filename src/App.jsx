import styles from './App.module.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Link, 
} from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { GameDetails } from './pages/GameDetails';
import GameContextProvider from './contexts/GameContextProvider';

function App() {
  return (
      <Router>
        <header>
          <Navbar />
          <Link to='/'>
            <h1 className={styles.title}>Portal Games Project</h1>
          </Link>
        </header>
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
