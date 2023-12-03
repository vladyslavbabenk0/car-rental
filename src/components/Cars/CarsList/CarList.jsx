import css from './CarList.module.css';

import { nanoid } from 'nanoid';
import { CarCard } from '../CarCard/CarCard';

export const CarList = ({ cars, toggleCarModal }) => {

  return (
    <div className={css.container}>

       <div className={css.cars_container}>
        {cars.map((car) => {
        return <CarCard advert={car} toggleCarModal={toggleCarModal} key={nanoid()} />;
      })}
       </div>
      
    </div>
  );
};
