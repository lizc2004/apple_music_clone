import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import styles from './Player.module.css'

export default function Player() {
  const { currentTrack, isPlaying } = useSelector(state => state.player)
  const dispatch = useDispatch()
  const audioRef = useRef(null)

  useEffect(() => {
    if (!audioRef.current) return
    if (isPlaying) {
      audioRef.current.play()
    } else {
      audioRef.current.pause()
    }
  }, [isPlaying, currentTrack])

  if (!currentTrack) return (
    <div className={styles.player}>
      <p className={styles.empty}>Seleziona un brano</p>
    </div>
  )

  return (
    <div className={styles.player}>
      <audio ref={audioRef} src={currentTrack.preview} autoPlay />
      <img src={currentTrack.album.cover_small} alt={currentTrack.title} className={styles.cover} />
      <div className={styles.info}>
        <p className={styles.title}>{currentTrack.title}</p>
        <p className={styles.artist}>{currentTrack.artist.name}</p>
      </div>
      <button
        className={styles.playBtn}
        onClick={() => dispatch({ type: 'TOGGLE_PLAY' })}
      >
        {isPlaying ? '⏸' : '▶️'}
      </button>
    </div>
  )
}