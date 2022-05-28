import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../apiServise/apiServise';

export default function SearchMovieList({ query }) {
  const [searchMovies, setSearchMovies] = useState('');

  useEffect(() => {
    api.fetchSearchMovies(query).then(data => setSearchMovies(data.results));
  }, [query]);

  return (
    <>
      {searchMovies && (
        <ul>
          {searchMovies.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
