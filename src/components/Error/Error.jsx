import css from './Error.module.css';

import { useDispatch } from 'react-redux';
import { setFilteredAdverts } from '../../redux/carsSlice';

export const Error = ({}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setFilteredAdverts(null));
    window.location.reload();
  };

  return (
    <div className={css.container}>
      <p className={css.text}>Oops! Sorry, something went wrong...</p>
      <button className={css.button} type="button" onClick={handleClick}>
        Try again
      </button>
    </div>
  );
};
