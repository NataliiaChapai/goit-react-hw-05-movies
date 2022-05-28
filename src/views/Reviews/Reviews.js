import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as api from '../../apiServise/apiServise';
import s from './Reviews.module.css';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    api.fetchMovieReviews(movieId).then(data => setReviews(data.results));
  }, [movieId]);

  return reviews.length === 0 ? (
    <p className={s.text}>We don't have any reviews for this movie</p>
  ) : (
    <ul className={s.list}>
      {reviews.map(review => (
        <li key={review.id}>
          <h3 className={s.title}>{review.author}</h3>
          <p className={s.text}>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
