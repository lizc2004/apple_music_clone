import { useEffect, useState } from 'react'
import styles from './NewReleases.module.css'

export default function NewReleases() {
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(true)

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
          <div key={track.id} className={styles.card}>
            <img src={track.album.cover_medium} alt={track.title} className={styles.cover} />
            <p className={styles.trackTitle}>{track.title}</p>
            <p className={styles.artist}>{track.artist.name}</p>
          </div>
        ))}
      </div>
    </section>
  )
}