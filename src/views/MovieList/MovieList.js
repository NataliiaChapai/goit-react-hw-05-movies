import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as api from '../../apiServise/apiServise';
import s from './MovieList.module.css';

export default function MovieList() {
  const [popularMovies, setPopularMovies] = useState('');

  useEffect(() => {
    api.fetchPopularMovies().then(data => setPopularMovies(data.results));
  }, []);
  return (
    <>
      <h2>Trending today</h2>
      {popularMovies && (
        <ul className={s.list}>
          {popularMovies.map(movie => (
            <li key={movie.id} className={s.item}>
              <Link to={`/movies/${movie.id}`} className={s.link}>
                {movie.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
