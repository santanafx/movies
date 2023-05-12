import React from 'react'
import { MovieComponent } from '../components/MovieComponent';
import styles from './Home.module.css'

export const Home = () => {

    const [movies, setMovies] = React.useState([]);

    const apiKey = 'a54568d8c62d218944381224a563c2d9';
    const apiPopularMovie = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${apiKey}`;

    async function getTopRatedMovies(url) {
        const response = await fetch(url);
        const responseJson = await response.json();
        setMovies(responseJson.results);

    }

    React.useEffect(() => {
        try {
            getTopRatedMovies(apiPopularMovie);
        } catch {
            console.log('Api não funcionou')
        }

    }, [])

    return (
        <div>
            <h1>Melhores filmes:</h1>
            <div className={styles.home}>
                {movies.map(movie => <MovieComponent key={movie.id} title={movie.title} poster_path={movie.poster_path} vote_average={movie.vote_average} popularity={movie.popularity} overview={movie.overview} />)}
            </div>
        </div>
    )
}
