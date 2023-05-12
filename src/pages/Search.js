import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { MovieComponent } from '../components/MovieComponent';
import styles from './Home.module.css'

export const Search = () => {

    const [searchParams] = useSearchParams();
    const [movies, setMovies] = React.useState([]);
    const query = searchParams.get('q');

    const apiKey = 'a54568d8c62d218944381224a563c2d9';
    const apiSearchMovie = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

    async function getMovies(url) {
        const response = await fetch(url);
        const responseJson = await response.json();
        setMovies(responseJson.results);

    }

    React.useEffect(() => {
        try {
            getMovies(apiSearchMovie);
        } catch {
            console.log('Api não funcionou')
        }

    }, [query])

    return (
        <div>
            <h1>Resultados para: {query}</h1>
            <div className={styles.home}>
                {movies.map(movie => <MovieComponent key={movie.id} title={movie.title} poster_path={movie.poster_path} vote_average={movie.vote_average} popularity={movie.popularity} overview={movie.overview} />)}
            </div>
        </div>
    )
}
