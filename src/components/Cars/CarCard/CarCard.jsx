import css from './CarCard.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import sprite from '../../../assets/sprite.svg';
import { addToFavorites, deleteFromFavorites } from '../../../redux/operations';
import { selectFavoritesFavorites } from '../../../redux/selectors';
import {
  extractCity,
  extractCountry,
  extractPrice,
  makeFirstLetterUpperCase,
} from '../../../helpers';
import { MAX_LENGTH } from '../../../helpers';

export const CarCard = ({ advert, toggleCarModal }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavoritesFavorites);
  const [isPremium, setIsPremium] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    setIsFavorite(favorites.some((favorite) => favorite.id === advert.id));
  }, [favorites, advert.id]);

  useEffect(() => {
    if (parseInt(extractPrice(advert.rentalPrice)) >= 100) {
      setIsPremium(true);
    }
  }, [advert.rentalPrice]);

  const toggleFavorite = () => {
    if (isFavorite) {
      dispatch(deleteFromFavorites({ id: advert.id }));
      setIsFavorite(false);
    } else {
      dispatch(addToFavorites(advert));
      setIsFavorite(true);
    }
  };

  return (
    <div className={css.container}>
      <div className={css.image_container}>
        <img className={css.image} src={advert.img} alt="Photo of a car" />
        <div className={css.gradient_overlay}></div>
      </div>

      <div className={css.icons} onClick={toggleFavorite}>
        {isFavorite ? (
          <svg className={css.icon_active}>
            <use href={sprite + '#icon-heart-active'}></use>
          </svg>
        ) : (
          <svg className={css.icon}>
            <use href={sprite + '#icon-heart'}></use>
          </svg>
        )}
      </div>

      <div className={css.presentation}>
        <span className={css.name}>
          {advert.make}
          {advert.make.length <= MAX_LENGTH &&
            advert.model.length <= MAX_LENGTH && (
              <span className={css.model}>{` ${advert.model}`}</span>
            )}
          , {advert.year}
        </span>
        <span className={css.name}>{advert.rentalPrice}</span>
      </div>

      <div className={css.description}>
        <p className={css.line}>
          <span className={css.details}>{extractCity(advert.address)}</span>
          <span className={css.separator}></span>
          <span className={css.details}>{extractCountry(advert.address)}</span>
          <span className={css.separator}></span>
          <span className={css.details}>{advert.rentalCompany}</span>
          {isPremium && (
            <>
              <span className={css.separator}></span>
              <span className={css.details}>Premium</span>
            </>
          )}
        </p>
        <p className={css.line}>
          <span className={css.details}>
            {makeFirstLetterUpperCase(advert.type)}
          </span>
          <span className={css.separator}></span>
          <span className={css.details}>{advert.model}</span>
          <span className={css.separator}></span>
          <span className={css.details}>{advert.id}</span>
          <span className={css.separator}></span>
          <span className={css.details}>{advert.functionalities[0]}</span>
        </p>
      </div>

      <button
        className={css.button}
        type="button"
        onClick={(e) => toggleCarModal(advert)(e)}
      >
        Learn more
      </button>
    </div>
  );
};
