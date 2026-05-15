import Header from './components/layout/Header'
import Sidebar from './components/layout/Sidebar'
import Player from './components/player/Player'
import NewReleases from './components/section/NewReleases'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <div className={styles.mainWrapper}>
        <Header />
        <main className={styles.mainContent}>
          <NewReleases />
        </main>
      </div>
      <Player />
    </div>
  )
}

export default App