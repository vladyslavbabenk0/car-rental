import css from './NoFavorites.module.css';

import { Link } from 'react-router-dom';

export const NoFavorites = () => {
  return (
    <div className={css.container}>
      <p className={css.text}>
        You haven't added any cars to your favorites yet
      </p>
      <Link className={css.button} to="/catalog">
        Choose a car
      </Link>
    </div>
  );
};
