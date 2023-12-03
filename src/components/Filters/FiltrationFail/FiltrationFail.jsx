import css from './FiltrationFail.module.css';

import { useDispatch } from 'react-redux';
import { setFilteredAdverts } from '../../../redux/carsSlice';

export const FiltrationFail = ({}) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setFilteredAdverts(null));
  };

  return (
    <div className={css.container}>
      <p className={css.text}>
        Sorry, we currently don't have any cars that meet your requirements
      </p>
      <button className={css.button} type="button" onClick={handleClick}>
        Try again
      </button>
    </div>
  );
};
