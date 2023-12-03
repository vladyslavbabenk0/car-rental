import css from './CarModal.module.css';

import {
  extractCity,
  extractCountry,
  makeFirstLetterUpperCase,
  splitConditions,
  divideAge,
  addComma,
  reverseDollar,
} from '../../../helpers';

export const CarModal = ({ advert, toggleCarModal }) => {
  return (
    <div className={css.container}>
      <div>
        <img className={css.photo} src={advert.img} alt="Car photo" />
        <p className={css.name}>
          {advert.make} <span className={css.model}>{advert.model}</span>,{' '}
          {advert.year}
        </p>
        <p className={css.first_line}>
          <span className={css.details}>{extractCity(advert.address)}</span>
          <span className={css.separator}></span>
          <span className={css.details}>{extractCountry(advert.address)}</span>
          <span className={css.separator}></span>
          <span className={css.details}>{`Id: ${advert.id}`}</span>
          <span className={css.separator}></span>
          <span className={css.details}>{`Year: ${advert.year}`}</span>
          <span className={css.separator}></span>
          <span className={css.details}>{`Type: ${makeFirstLetterUpperCase(
            advert.type
          )}`}</span>
        </p>
        <p>
          <span
            className={css.details}
          >{`Fuel Consumption: ${advert.fuelConsumption}`}</span>
          <span className={css.separator}></span>
          <span
            className={css.details}
          >{`Engine Size: ${advert.engineSize}`}</span>
        </p>

        <p className={css.description}>{advert.description}</p>
      </div>

      <div>
        <p className={css.accessories}>Accessories and functionalities:</p>

        <p className={css.first_line}>
          <span className={css.details}>{advert.accessories[0]}</span>
          <span className={css.separator}></span>
          <span className={css.details}>{advert.accessories[1]}</span>
          <span className={css.separator}></span>
          <span className={css.details}>{advert.accessories[2]}</span>
        </p>
        <p className={css.second_line}>
          <span className={css.details}>{advert.functionalities[0]}</span>
          <span className={css.separator}></span>
          <span className={css.details}>{advert.functionalities[1]}</span>
          <span className={css.separator}></span>
          <span className={css.details}>{advert.functionalities[2]}</span>
        </p>
      </div>

      <div className={css.conditions_section}>
        <p className={css.conditions}>Rental Conditions:</p>
        <div className={css.conditions_block}>
          <span className={css.condition}>
            {`${divideAge(advert.rentalConditions, 0)}: `}
            <span className={css.condition_meaning}>
              {divideAge(advert.rentalConditions, 1)}
            </span>
          </span>
          <span className={css.condition}>
            {splitConditions(advert.rentalConditions, 1)}
          </span>
        </div>
        <div className={css.conditions_block}>
          <span className={css.condition}>
            {splitConditions(advert.rentalConditions, 2)}
          </span>
          <span className={css.condition}>
            Mileage:{' '}
            <span className={css.condition_meaning}>
              {addComma(advert.mileage)}
            </span>
          </span>
          <span className={css.condition}>
            Price:{' '}
            <span className={css.condition_meaning}>
              {reverseDollar(advert.rentalPrice)}
            </span>
          </span>
        </div>
      </div>

      <button
        className={css.button}
        onClick={(e) => toggleCarModal(advert)(e)}
        type="button"
        id="modal"
      >
        Rental car
      </button>
    </div>
  );
};
