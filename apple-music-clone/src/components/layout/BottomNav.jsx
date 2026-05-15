import styles from './BottomNav.module.css'
import profileImg from '../../assets/profile.png'

export default function BottomNav() {
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li className={styles.item}> Home</li>
        <li className={styles.item}> Cerca</li>
        <li className={styles.item}> Libreria</li>
        <li className={styles.item}> Radio</li>
      </ul>
      <div className={styles.profile}>
        <img src={profileImg} alt="Noemi Coppotelli" className={styles.profileImg} />
        <span className={styles.profileName}>Noemi Coppotelli</span>
      </div>
    </nav>
  )
}