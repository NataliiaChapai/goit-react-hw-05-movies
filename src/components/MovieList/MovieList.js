// import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import s from './MovieList.module.css';

// export default function MovieList({movies}) {

//   return (
//     <>
//       {movies && (
//         <ul className={s.list}>
//           {movies.map(({id, title}) => (
//             <li key={id} className={s.item}>
//               <Link to={`/movies/${id}`} className={s.link}>
//                 {title}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       )}
//     </>
//   );
// }

// MovieList.propTypes = {
//     movies: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieList.module.css';

export default function MovieList({ movies }) {
  const location = useLocation();

  return (
    <>
      {movies && (
        <ul className={s.list}>
          {movies.map(({ id, title }) => (
            <li key={id} className={s.item}>
              <Link
                to={{ pathname: `/movies/${id}`, state: { from: location } }}
                className={s.link}
              >
                {title}
              </Link>
            </li>
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
