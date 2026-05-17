import { useDispatch } from 'react-redux'
import Card from '../ui/Card'
import styles from './NewReleases.module.css'

export default function SearchResults({ results, query }) {
  const dispatch = useDispatch()

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Risultati per "{query}"</h2>
      <div className={styles.grid}>
        {results.map(track => (
          <Card
            key={track.id}
            track={track}
            onClick={(track) => dispatch({ type: 'SET_TRACK', payload: track })}
          />
        ))}
      </div>
    </section>
  )
}