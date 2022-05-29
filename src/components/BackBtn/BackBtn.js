import PropTypes from 'prop-types';
import s from './BackBtn.module.css';

export default function BackBtn({ onClick }) {
  return (
    <button type="button" className={s.button} onClick={onClick}>
      Go back
    </button>
  );
}

BackBtn.propTypes = {
  onClick: PropTypes.func.isRequired,
};
