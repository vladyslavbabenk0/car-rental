import css from './FavoritesPage.module.css';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { CarList } from '../../components/Cars/CarsList/CarList';
import { CarModal } from '../../components/Cars/CarModal/CarModal';
import { Modal } from '../../components/Modal/Modal';
import { Success } from '../../components/Success/Success';
import { NoFavorites } from '../../components/NoFavorites/NoFavorites';
import { selectFavoritesFavorites } from '../../redux/selectors';

const FavoritesPage = () => {
  const favorites = useSelector(selectFavoritesFavorites);
  const [isCarModalOpen, setIsCarModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [advert, setAdvert] = useState(null);

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

  useEffect(() => {}, [favorites]);

  return (
    <>
    {
      favorites.length === 0 &&
      <NoFavorites/>
    }
      <CarList cars={favorites} toggleCarModal={toggleCarModal} />
      {isCarModalOpen && (
        <Modal toggleCarModal={toggleCarModal}>
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

export default FavoritesPage;
