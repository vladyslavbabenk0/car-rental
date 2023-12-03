import css from './ErrorPage.module.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className={css.container}>
      <p className={css.error}>404</p>
      <p className={css.text}>Sorry, no such page</p>

      <Link className={css.link} to="/">
        Return to main
      </Link>
    </div>
  );
};

export default ErrorPage;
