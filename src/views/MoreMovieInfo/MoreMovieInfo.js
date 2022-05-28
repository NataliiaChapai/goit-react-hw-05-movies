import { NavLink, useLocation } from 'react-router-dom';
// import s from './MovieMovieInfo.module.css';

export default function MovieInfo() {
  const url = useLocation().pathname;

  return (
    <ul>
      <li>
        <NavLink
          to={`${url}/cast`}
          style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
        >
          Cast
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`${url}/rewiews`}
          style={({ isActive }) => ({ color: isActive ? 'blue' : 'black' })}
        >
          Reviews
        </NavLink>
      </li>
    </ul>
  );
}
