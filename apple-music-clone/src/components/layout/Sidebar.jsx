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
    .then(data => dispatch({ 
      type: 'SET_SEARCH_RESULTS', 
      payload: { results: data.data, query } 
    }))
    .catch(err => console.error(err))
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
            <li className={styles.navItem}> Home</li>
            <li className={styles.navItem}> Novità</li>
            <li className={styles.navItem}> Radio</li>
          </ul>
        </nav>
        <p className={styles.sectionLabel}>Libreria</p>
        <ul className={styles.navList}>
          <li className={styles.navItem}> Aggiunti di recente</li>
          <li className={styles.navItem}> Artisti</li>
          <li className={styles.navItem}> Album</li>
          <li className={styles.navItem}> Brani</li>
        </ul>
      </div>
      <div className={styles.profile}>
        <img src={profileImg} alt="Noemi" className={styles.profileImg} />
        <span className={styles.profileName}>Noemi Coppotelli</span>
      </div>
    </aside>
  )
}