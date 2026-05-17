import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Card from '../ui/Card'
import styles from './NewReleases.module.css'

export default function NewReleases() {
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=2024')
      .then(res => res.json())
      .then(data => {
        setTracks(data.data)
        setLoading(false)
      })
      .catch(err => console.error(err))
  }, [])

  if (loading) return <p className={styles.loading}>Caricamento...</p>

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Nuove Uscite</h2>
      <div className={styles.grid}>
        {tracks.map(track => (
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