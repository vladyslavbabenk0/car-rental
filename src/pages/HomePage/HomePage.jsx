import css from './HomePage.module.css';
import logo from '../../assets/logo.png';

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <div className={css.logotype}>
        <img className={css.logo} src={logo} alt="Logo" />
        <p className={css.slogan}>Chose your car for a ride!</p>
      </div>
    </div>
  );
};

export default HomePage;
