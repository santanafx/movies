import React from 'react'

export const MovieComponent = ({ title, poster_path }) => {
    return (
        <div>
            <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="Imagens dos filmes" />
            <h2>{title}</h2>
        </div>
    )
}
