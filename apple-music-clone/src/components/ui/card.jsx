import { useDispatch, useSelector } from 'react-redux'
import styles from './Card.module.css'

export default function Card({ track, onClick }) {
  const dispatch = useDispatch()
  const favourites = useSelector(state => state.favourites.tracks)
  const isFavourite = favourites.some(t => t.id === track.id)

  const toggleFavourite = (e) => {
    e.stopPropagation() // evita che il click sul cuore avvii anche la traccia
    if (isFavourite) {
      dispatch({ type: 'REMOVE_FAVOURITE', payload: track.id })
    } else {
      dispatch({ type: 'ADD_FAVOURITE', payload: track })
    }
  }

  return (
    <div className={styles.card} onClick={() => onClick(track)}>
      <div className={styles.coverWrapper}>
        <img src={track.album.cover_medium} alt={track.title} className={styles.cover} />
        <button className={`${styles.starBtn} ${isFavourite ? styles.starActive : ''}`} 
                onClick={toggleFavourite}>
          {isFavourite ? '★' : '☆'}
        </button>
      </div>
      <p className={styles.trackTitle}>{track.title}</p>
      <p className={styles.artist}>{track.artist.name}</p>
    </div>
  )
}