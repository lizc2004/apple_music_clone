import { useSelector } from 'react-redux'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Player from './components/player/Player'
import NewReleases from './components/section/NewReleases'
import SearchResults from './components/section/SearchResults'
import styles from './App.module.css'

function App() {
  const { results, query } = useSelector(state => state.search)

  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.mainWrapper}>
        <Header />
        <main className={styles.mainContent}>
          {results.length > 0 ? (
            <SearchResults results={results} query={query} />
          ) : (
            <NewReleases />
          )}
        </main>
      </div>
      <Player />
    </div>
  )
}

export default App