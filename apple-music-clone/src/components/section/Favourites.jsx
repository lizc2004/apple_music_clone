import { useSelector, useDispatch } from 'react-redux'
import Card from '../ui/Card'
import styles from './NewReleases.module.css'

export default function Favourites() {
     const favourites = useSelector(state => state.favourites.tracks)
     const dispatch = useDispatch()
     
     if (favourites.length === 0) (
            <section className={styles.section}>
                <h2 className={styles.title}>Brani preferiti</h2>
                <p className={{color: '#8e8e8e' }}>Non hai ancora aggiunto brani ai preferiti. Clicca ★ su una card! </p>
            </section>
        )
    

     return (
        <section className={styles.section}>
            <h2 className={styles.title}>Brani preferiti</h2>
            <div className={styles.grid}>
                {favourites.map(track => (
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

