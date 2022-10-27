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

function App() {
  return (
      <Router>
        <header>
          <Navbar />
          <Link to='/'>
            <h1 className={styles.title}>Video Games</h1>
          </Link>
        </header>
        <main>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/games/:gameId' element={<GameDetails />} />
          </Routes>
        </main>
        <Footer />
      </Router>
  );
}

export default App;
