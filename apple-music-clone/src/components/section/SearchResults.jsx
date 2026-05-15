import { useDispatch } from 'react-redux'
import styles from './NewReleases.module.css'

export default function SearchResults({ results, query }) {
  const dispatch = useDispatch()

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Risultati per "{query}"</h2>
      <div className={styles.grid}>
        {results.map(track => (
          <div
            key={track.id}
            className={styles.card}
            onClick={() => dispatch({ type: 'SET_TRACK', payload: track })}
          >
            <img src={track.album.cover_medium} alt={track.title} className={styles.cover} />
            <p className={styles.trackTitle}>{track.title}</p>
            <p className={styles.artist}>{track.artist.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}