import { useEffect, useState } from 'react';
import { useParams, Route, Routes, NavLink } from 'react-router-dom';
import * as api from '../../apiServise/apiServise';
import s from './MovieInfo.module.css';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';

// import MoreMovieInfo from '../MoreMovieInfo/MoreMovieInfo'

export default function MovieInfo() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState('');
  const userScore = movie.vote_average * 10;
  const src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}`;
  let movieGenres = [];

  if (movie.genres) {
    movie.genres.map(genre => movieGenres.push(genre.name));
  }

  useEffect(() => {
    api.fetchMovieInfo(movieId).then(setMovie);
  }, [movieId]);

  return (
    movie && (
      <>
        <div className={s.wrapper}>
          <img src={src} alt={movie.title} className={s.img} />
          <div className={s.info}>
            <h2 className={s.title}>{movie.title}</h2>
            <p className={s.text}>User score: {userScore}%</p>
            <h3 className={s.title}>Overview</h3>
            <p className={s.text}>{movie.overview}</p>
            <h3 className={s.title}>Genres</h3>
            <p className={s.text}>{movieGenres.join(', ')}</p>
          </div>
        </div>
        <div>
          <h3 className={s.title}>Additional information</h3>
          <nav className={s.nav}>
            <NavLink
              to={`/movies/${movieId}/cast`}
              className={s.navItem}
              style={({ isActive }) => ({
                color: isActive ? 'purple' : 'black',
              })}
            >
              Cast
            </NavLink>
            <NavLink
              to={`/movies/${movieId}/reviews`}
              className={s.navItem}
              style={({ isActive }) => ({
                color: isActive ? 'purple' : 'black',
              })}
            >
              Reviews
            </NavLink>
          </nav>

          <Routes>
            <Route exact path="/cast" element={<Cast />} />
            <Route path="/reviews" element={<Reviews />} />
          </Routes>
        </div>
      </>
    )
  );
}
