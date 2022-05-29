import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import * as api from '../../apiServise/apiServise';
import s from './MovieSearch.module.css';
import MovieList from 'components/MovieList/MovieList';

export default function MovieSearch() {
  const location = useLocation();
  const [params] = useSearchParams();
  const history = createBrowserHistory({ window });
  const [searchMovies, setSearchMovies] = useState([]);
  const [query, setQuery] = useState('');

  function fetchMovies(query) {
    api.fetchSearchMovies(query).then(data => setSearchMovies(data.results));
  }

  function onChange(event) {
    setQuery(event.target.value.toLowerCase());
  }

  function onSubmit(event) {
    event.preventDefault();

    if (query.trim() === '') {
      return;
    }

    history.push({
      ...location,
      search: `query=${query}`,
    });

    fetchMovies(query);
    setQuery('');
  }

  useEffect(() => {
    const query = params.get('query');
    if (query) {
      setQuery(query);
      fetchMovies(query);
    }
  }, [params]);

  return (
    <>
      <form onSubmit={onSubmit} className={s.form}>
        <input
          name="name"
          value={query}
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          onChange={onChange}
        ></input>
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
      {searchMovies && <MovieList movies={searchMovies} />}
    </>
  );
}
