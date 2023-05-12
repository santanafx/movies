import React from 'react'
import styles from './MovieComponent.module.css'
import { AiFillStar } from "react-icons/ai";
import { Link } from 'react-router-dom';

export const MovieComponent = ({ title, poster_path, vote_average, popularity, id }) => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="Imagens dos filmes" />
                <div className={styles.text}>
                    <h2 className={styles.title}>{title}</h2>
                </div>
                <div>
                    <h2 className={styles.average}><AiFillStar className={styles.star} /> {vote_average}</h2>
                    <h2 className={styles.popularity}>Popularidade: <span>{popularity}</span></h2>
                </div>
                <Link className={styles.buttonOverview} to={`/movie/${id}`}>Detalhes</Link>
            </div>
        </div>
    )
}
