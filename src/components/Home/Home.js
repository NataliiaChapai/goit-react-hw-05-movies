import { useState, useEffect } from 'react';
import * as api from '../../apiServise/apiServise';
import MovieList from 'components/MovieList/MovieList';
import s from './Home.module.css';

export default function Home() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    api.fetchPopularMovies().then(data => setPopularMovies(data.results));
  }, []);
  return (
    <>
      <h2 className={s.title}>Trending today</h2>
      <MovieList movies={popularMovies} />
    </>
  );
}
