import React from 'react'
import styles from './MovieComponent.module.css'

export const MovieComponent = ({ title, poster_path }) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="Imagens dos filmes" />
                <div className={styles.text}>
                    <h2 >{title}</h2>
                </div>
            </div>
        </div>

    )
}
