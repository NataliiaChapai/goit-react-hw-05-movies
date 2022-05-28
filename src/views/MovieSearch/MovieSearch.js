import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import SearchMovieList from '../SearchMovieList/SearchMovieList';
import s from './MovieSearch.module.css';

export default function MovieSearch() {
  const [query, setQuery] = useState('');
  const [input, setInput] = useState('');
  const [params] = useSearchParams();
  const location = useLocation();
  const history = createBrowserHistory({ window });

  useEffect(() => {
    setQuery(params.get('query'));
  }, [params]);

  function onChange(event) {
    setInput(event.target.value.toLowerCase());
  }

  function onSubmit(event) {
    event.preventDefault();
    if (input.trim() === '') {
      return;
    }
    setQuery(input);
    setInput('');
    history.push({
      ...location,
      search: `?query=${input}`,
    });
  }

  return (
    <>
      <form onSubmit={onSubmit} className={s.form}>
        <input
          name="name"
          value={input}
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
      {query && <SearchMovieList query={query} />}
    </>
  );
}
