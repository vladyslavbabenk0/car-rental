import css from './CatalogPage.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FiltrationFail } from '../../components/Filters/FiltrationFail/FiltrationFail';
import { CarList } from '../../components/Cars/CarsList/CarList';
import { Filter } from '../../components/Filters/Filter/Filter';
import { LoadMoreBtn } from '../../components/Loads/LoadMoreBtn/LoadMoreBtn';
import { Loader } from '../../components/Loads/Loader/Loader';
import { CarModal } from '../../components/Cars/CarModal/CarModal';
import { Modal } from '../../components/Modal/Modal';
import { Success } from '../../components/Success/Success';
import { Error } from '../../components/Error/Error';

import { getAllCars, getFirstCars } from '../../redux/operations';
import {
  selectCarsAdverts,
  selectCarsFilteredAdverts,
  selectCarsFirstAdverts,
  selectCarsIsLoading,
  selectCarsError,
} from '../../redux/selectors';

const CatalogPage = () => {
  const cars = useSelector(selectCarsAdverts);

  const filteredCars = useSelector(selectCarsFilteredAdverts);
  const isLoading = useSelector(selectCarsIsLoading);
  const error = useSelector(selectCarsError);
  const dispatch = useDispatch();

  const [isCarModalOpen, setIsCarModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [advert, setAdvert] = useState(null);

  useEffect(() => {
    dispatch(getAllCars());
    dispatch(getFirstCars());
  }, []);

  const firstCars = useSelector(selectCarsFirstAdverts);
  const [cardsToShow, setCardsToShow] = useState(firstCars);

  useEffect(() => {
    setCardsToShow(firstCars);
  }, [firstCars]);

  const handleLoadMoreClick = () => {
    setCardsToShow(cars);
  };

  const toggleCarModal = (advert) => (e) => {
    if (e) {
      e.preventDefault();
    }
    if (e && e.currentTarget.id === 'modal') {
      setIsSuccessModalOpen((prevState) => !prevState);
    }
    if (advert) {
      setAdvert(advert);
    }
    if (isSuccessModalOpen) {
      setIsCarModalOpen(false);
      setIsSuccessModalOpen(false);
      return;
    }
    setIsCarModalOpen((prevState) => !prevState);
  };

  const toggleSuccessModal = (e) => {
    if (e) {
      e.preventDefault();
    }

    setIsSuccessModalOpen((prevState) => !prevState);
  };

  useEffect(() => {
    const body = document.body;
    if (isCarModalOpen || isSuccessModalOpen) {
      body.classList.add(css['modal-open']);
    } else {
      body.classList.remove(css['modal-open']);
    }
  }, [isCarModalOpen, isSuccessModalOpen]);

  return (
    <>
      <Filter />
      {error !== null && <Error />}
      {isLoading && <Loader />}
      {!isLoading &&
        (!filteredCars ? (
          <CarList cars={cardsToShow} toggleCarModal={toggleCarModal} />
        ) : (
          <>
            {filteredCars.length > 0 ? (
              <CarList cars={filteredCars} toggleCarModal={toggleCarModal} />
            ) : (
              <FiltrationFail />
            )}
          </>
        ))}
      {error === null && cardsToShow === firstCars && !filteredCars && (
        <LoadMoreBtn onClick={handleLoadMoreClick} />
      )}
      {isCarModalOpen && (
        <Modal toggleCarModal={toggleCarModal} advert={advert}>
          <CarModal advert={advert} toggleCarModal={toggleCarModal} />
        </Modal>
      )}
      {isSuccessModalOpen && (
        <Modal toggleCarModal={toggleCarModal}>
          <Success advert={advert} toggleCarModal={toggleSuccessModal} />
        </Modal>
      )}
    </>
  );
};

export default CatalogPage;
