import Header from './components/layout/Header'
import BottomNav from './components/layout/BottomNav'
import Player from './components/player/Player'
import NewReleases from './components/section/NewReleases'




function App () {
  return (
    <div className="App">
      <Header />
      <main className='main-content'>
        <NewReleases/>
      </main>
      <BottomNav />
      <Player />
    </div>
  )
}

export default App
