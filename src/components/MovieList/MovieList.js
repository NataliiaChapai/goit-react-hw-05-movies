import PropTypes from 'prop-types';
import s from './MovieList.module.css';
import ListItem from 'views/ListItem/ListItem';

export default function MovieList({ movies }) {
  return (
    <>
      {movies && (
        <ul className={s.list}>
          {movies.map(movie => (
            <ListItem movie={movie} key={movie.id} />
          ))}
        </ul>
      )}
    </>
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
