import css from './Success.module.css';

import logo from '../../assets/logo.png';

export const Success = ({ advert, toggleCarModal }) => {
  return (
    <div className={css.container}>
      <div className={css.logotype}>
        <img className={css.logo} src={logo} alt="Logo" />
        <p className={css.slogan}>CARS FOR EVERYONE</p>
      </div>

      <img className={css.photo} src={advert.img} alt="Car photo" />

      <div className={css.description_block}>
        <p className={css.description}>
          Please feel free to contact us to finalize your car rental:
        </p>
        <a href="tel:+380730000000">+38 (073) 000 00 00</a>
        <p className={css.description}>Thanks for choosing us!</p>
      </div>

      <button className={css.button} onClick={toggleCarModal} type="button">
        Close
      </button>
    </div>
  );
};
