import { VideoGamesGrid } from './components/VideoGamesGrid';
import styles from './App.module.css';

function App() {
  return (
    <div className="App">
      <h1 className={styles.title}>Video Games</h1>
      <div>
        <VideoGamesGrid />
      </div>
    </div>
  );
}

export default App;
