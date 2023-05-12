import React from 'react'
import { useParams } from 'react-router-dom'
import {
    BsGraphUp,
    BsWallet2,
    BsHourglassSplit,
    BsFillFileEarmarkTextFill
} from 'react-icons/bs'
import styles from './Movie.module.css'

export const Movie = () => {
    const { id } = useParams();
    const [movie, setMovie] = React.useState([]);

    const apiKey = 'a54568d8c62d218944381224a563c2d9';
    const apiMovieDetails = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;

    async function getMoviesDetails(url) {
        const response = await fetch(url);
        const responseJson = await response.json();
        setMovie(responseJson);

    }

    React.useEffect(() => {
        try {
            getMoviesDetails(apiMovieDetails);
        } catch {
            console.log('Api não funcionou')
        }

    }, [])

    console.log(movie)
    return (
        <div className={styles.container}>
            <h1>{movie.title}</h1>
            <div className={styles.card}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Imagens dos filmes" />
            </div>
            <div className={styles.cardDescription}>
                <h3><BsWallet2 className={styles.icon} /> <span className={styles.span}>Orçamento: </span> {movie.budget}</h3>
                <h3><BsGraphUp className={styles.icon} /> <span className={styles.span}>Receita: </span> {movie.revenue}</h3>
                <h3><BsHourglassSplit className={styles.icon} /> <span className={styles.span}>Duração: </span> {movie.runtime} minutos</h3>
                <h3><BsFillFileEarmarkTextFill className={styles.icon} /> <span className={styles.span}>Descrição: </span> {movie.overview}</h3>
            </div>
        </div>
    )
}
