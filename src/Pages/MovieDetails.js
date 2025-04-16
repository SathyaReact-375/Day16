import React from 'react';
import { useParams } from 'react-router-dom';

function MovieDetails() {
    const { id } = useParams();
    const movieDetails = {
        1: { title: 'Inception', description: 'A mind-bending thriller about dream manipulation.' },
        2: { title: 'The Dark Knight', description: 'A superhero battles chaos and corruption.' },
        3: { title: 'Interstellar', description: 'A sci-fi epic exploring space and time.' },
    };

    const movie = movieDetails[id];

    if (!movie) {
        return <div>Movie not found.</div>;
    }

    return (
        <div>
            <h1>{movie.title}</h1>
            <p>{movie.description}</p>
        </div>
    );
}

export default MovieDetails;