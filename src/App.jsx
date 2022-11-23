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
import { Search } from './components/Search';

function App() {
  return (
      <Router>
        <header>
          <Navbar />
          <Link to='/'>
            <h1 className={styles.title}>Video Games</h1>
          </Link>
        </header>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/search' element={<Search />} />
          <Route path='/games/details/:gameId' element={<GameDetails />} />
        </Routes>
        <Footer />
      </Router>
  );
}

export default App;
