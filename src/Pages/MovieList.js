import React from 'react';
import { Link } from 'react-router-dom';

function MovieList() {
    const movies = [
        { id: 1, title: 'Inception' },
        { id: 2, title: 'The Dark Knight' },
        { id: 3, title: 'Interstellar' },
    ];

    return (
        <div>
            <h1>Movie List</h1>
            <ul>
                {movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default MovieList;