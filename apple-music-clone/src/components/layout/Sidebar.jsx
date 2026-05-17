import styles from './Sidebar.module.css'
import profileImg from '../../assets/profile.png'
import logo from '../../assets/apple.svg'
import { useState } from 'react'
import { useDispatch } from 'react-redux'

export default function Sidebar() {
  const [query, setQuery] = useState('')
  const dispatch = useDispatch()
  
  const onSearch = () => {
    if (!query.trim()) return
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
      .then(res => res.json())
      .then(data => {
        const stessoArtista = data.data.filter(track => track.artist.id === data.data[0].artist.id)
        if (stessoArtista.length / data.data.length > 0.5) {
          dispatch({ type: 'SET_ARTIST', payload: data.data[0].artist.id })
        } else {
          dispatch({ type: 'SET_SEARCH_RESULTS', payload: { results: data.data, query } })
        }
      })
      .catch(err => console.error(err))
  }

  const goTo = (page) => {
    dispatch({ type: 'CLEAR_SEARCH' })
    dispatch({ type: 'SET_PAGE', payload: page })
  }

  return (
    <aside className={styles.sidebar}>
      <div className={styles.top}>
        <img src={logo} alt="Apple Music" className={styles.logo} />
        <input
         className={styles.searchBar}
         type="text"
         placeholder="Cerca"
         value={query}
         onChange={(e) => setQuery(e.target.value)}
         onKeyDown={(e) => e.key === 'Enter' && onSearch()}
         />
        
        <nav>
          <ul className={styles.navList}>
            <li className={styles.navItem} onClick={() => goTo('home')}> Home</li>
            <li className={styles.navItem} onClick={() => goTo('home')}> Novità</li>
            <li className={styles.navItem} onClick={() => goTo('home')}> Radio</li>
          </ul>
        </nav>
        <p className={styles.sectionLabel}>Libreria</p>
        <ul className={styles.navList}>
          <li className={styles.navItem} onClick={() => goTo('home')}> Aggiunti di recente</li>
          <li className={styles.navItem} onClick={() => goTo('home')}> Artisti</li>
          <li className={styles.navItem} onClick={() => goTo('home')}> Album</li>
          <li className={styles.navItem} onClick={() => goTo('home')}> Brani</li>
        </ul>
        <p className={styles.sectionLabel}>Playlist</p>
        <ul className={styles.navList}>
          <li className={styles.navItem} onClick={() => goTo('favourites')}>☆ Brani preferiti</li>
        </ul>
      </div>
      <div className={styles.profile}>
        <img src={profileImg} alt="Noemi" className={styles.profileImg} />
        <span className={styles.profileName}>Noemi Coppotelli</span>
      </div>
    </aside>
  )
}
