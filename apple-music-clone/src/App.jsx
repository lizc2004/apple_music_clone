import { useSelector } from 'react-redux'
import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Player from './components/player/Player'
import NewReleases from './components/section/NewReleases'
import SearchResults from './components/section/SearchResults'
import Favourites from './components/section/Favourites'
import ArtistPage from './components/section/ArtistPage'
import styles from './App.module.css'

function App() {
  const { results, query } = useSelector(state => state.search)
  const { currentPage } = useSelector(state => state.ui)

  const renderContent = () => {
    if (currentPage === 'favourites') return <Favourites />
    if (currentPage === 'artist') return <ArtistPage />
    if (results.length > 0) return <SearchResults results={results} query={query} />
    return <NewReleases />
  }

  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.mainWrapper}>
        <Header />
        <main className={styles.mainContent}>
          {renderContent()}
        </main>
      </div>
      <Player />
    </div>
  )
}

export default App