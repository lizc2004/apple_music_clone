import styles from './Sidebar.module.css'
import profileImg from '../../assets/profile.png'
import logo from '../../assets/apple.svg'

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.top}>
        <img src={logo} alt="Apple Music" className={styles.logo} />
        <div className={styles.searchBar}> Cerca</div>
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