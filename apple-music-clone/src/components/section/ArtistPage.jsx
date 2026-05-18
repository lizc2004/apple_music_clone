import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styles from './ArtistPage.module.css'

function formatDuration(seconds) {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

function formatFans(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(0) + 'K'
  return n
}

export default function ArtistPage() {
  const artistId = useSelector(state => state.ui.artistId)
  const favourites = useSelector(state => state.favourites.tracks)
  const dispatch = useDispatch()

  const [artist, setArtist] = useState(null)
  const [topTracks, setTopTracks] = useState([])
  const [albums, setAlbums] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!artistId) return
    setLoading(true)

    const base = 'https://striveschool-api.herokuapp.com/api/deezer'

    Promise.all([
      fetch(`${base}/artist/${artistId}`).then(r => r.json()),
      fetch(`${base}/artist/${artistId}/top?limit=10`).then(r => r.json()),
      fetch(`${base}/artist/${artistId}/albums`).then(r => r.json()),
    ])
      .then(([artistData, tracksData, albumsData]) => {
        setArtist(artistData)
        setTopTracks(tracksData.data || [])
        setAlbums((albumsData.data || []).slice(0, 6))
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [artistId])

  if (loading) {
    return <p className={styles.loading}>Caricamento artista...</p>
  }

  if (!artist) {
    return <p className={styles.loading}>Artista non trovato.</p>
  }

  return (
    <div className={styles.page}>

      {/* ── HERO BANNER ── */}
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(${artist.picture_big})` }}
      >
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <button
            className={styles.playBtn}
            onClick={() => topTracks[0] && dispatch({ type: 'SET_TRACK', payload: topTracks[0] })}
          >
            ▶
          </button>
          <div>
            <h1 className={styles.artistName}>{artist.name}</h1>
            {artist.nb_fan && (
              <p className={styles.fans}>{formatFans(artist.nb_fan)} ascoltatori mensili</p>
            )}
          </div>
        </div>
      </div>

      {/* ── TOP BRANI ── */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Top brani</h2>
        <div className={styles.trackList}>
          {topTracks.map((track, index) => {
            const isFavourite = favourites.some(t => t.id === track.id)

            const toggleFavourite = (e) => {
              e.stopPropagation()
              if (isFavourite) {
                dispatch({ type: 'REMOVE_FAVOURITE', payload: track.id })
              } else {
                dispatch({ type: 'ADD_FAVOURITE', payload: track })
              }
            }

            return (
              <div
                key={track.id}
                className={styles.trackRow}
                onClick={() => dispatch({ type: 'SET_TRACK', payload: track })}
              >
                <span className={styles.trackNum}>{index + 1}</span>
                <img
                  src={track.album?.cover_medium}
                  alt={track.title}
                  className={styles.trackThumb}
                />
                <button
                  type="button"
                  className={`${styles.addBtn} ${isFavourite ? styles.starActive : ''}`}
                  onClick={toggleFavourite}
                >
                  {isFavourite ? '✓' : '+'}
                </button>
                <div className={styles.trackInfo}>
                  <span className={styles.trackTitle}>{track.title}</span>
                  <span className={styles.trackAlbum}>{track.album?.title}</span>
                </div>
                <span className={styles.trackDuration}>{formatDuration(track.duration)}</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── ALBUM ESSENZIALI ── */}
      {albums.length > 0 && (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Album essenziali</h2>
          <div className={styles.albumGrid}>
            {albums.map(album => (
              <div key={album.id} className={styles.albumCard}>
                <img
                  src={album.cover_big}
                  alt={album.title}
                  className={styles.albumCover}
                />
                <p className={styles.albumTitle}>{album.title}</p>
                <p className={styles.albumYear}>
                  {album.release_date ? album.release_date.slice(0, 4) : ''}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
