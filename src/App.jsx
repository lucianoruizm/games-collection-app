import { GamesGrid } from './components/GamesGrid';
import styles from './App.module.css';
import { Navbar } from './components/Navbar';
import { HomeContainer } from './components/HomeContainer';
import { Footer } from './components/Footer';

function App() {
  return (
      <div>
        <header>
          <Navbar />
          <h1 className={styles.title}>Video Games</h1>
        </header>
        <main>
          <HomeContainer />
          <GamesGrid />
        </main>
        <Footer />
      </div>
  );
}

export default App;
