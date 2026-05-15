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

  return (
    <div className={styles.player}>
      {currentTrack && <audio ref={audioRef} src={currentTrack.preview} autoPlay />}
      
      <div className={styles.controls}>
        <button className={styles.btn}>⇄</button>
        <button className={styles.btn}>⏮</button>
        <button
          className={styles.playBtn}
          onClick={() => dispatch({ type: 'TOGGLE_PLAY' })}
        >
          {isPlaying ? '⏸' : '▶'}
        </button>
        <button className={styles.btn}>⏭</button>
        <button className={styles.btn}>↻</button>
      </div>

      <div className={styles.trackInfo}>
        {currentTrack ? (
          <>
            <img src={currentTrack.album.cover_small} alt={currentTrack.title} className={styles.cover} />
            <div className={styles.info}>
              <p className={styles.title}>{currentTrack.title}</p>
              <p className={styles.artist}>{currentTrack.artist.name}</p>
            </div>
          </>
        ) : (
          <p className={styles.empty}>Seleziona un brano</p>
        )}
      </div>

      <div className={styles.rightControls}>
        <button className={styles.btn}>🔉</button>
      </div>
    </div>
  )
}