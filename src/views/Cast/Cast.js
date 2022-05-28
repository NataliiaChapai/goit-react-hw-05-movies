import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../apiServise/apiServise';
import s from './Cast.module.css';

export default function Cast() {
  const [actors, setActors] = useState([]);
  const { movieId } = useParams();
  const src = `https://www.themoviedb.org/t/p/w600_and_h900_bestv2`;

  useEffect(() => {
    api.fetchMovieActors(movieId).then(data => setActors(data.cast));
  }, [movieId]);

  return (
    <>
      {actors && (
        <ul className={s.list}>
          {actors.map(actor => (
            <li key={actor.id} className={s.item}>
              {actor.profile_path ? (
                <img
                  src={`${src}${actor.profile_path}`}
                  alt={actor.name}
                  className={s.img}
                />
              ) : (
                <img
                  src="https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png"
                  alt="noImage"
                  className={s.img}
                />
              )}
              <h3 className={s.title}>{actor.name}</h3>
              <p className={s.text}>Character:</p>
              <h4 className={s.subTitle}>{actor.character}</h4>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
