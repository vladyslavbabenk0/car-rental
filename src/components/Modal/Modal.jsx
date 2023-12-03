import css from './Modal.module.css';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import sprite from '../../assets/sprite.svg';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ toggleCarModal, children, advert }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        toggleCarModal(advert)(evt);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleCarModal]);

  const handleBackdropClick = (evt) => {
    if (e.currentTarget === e.target) {
      toggleCarModal(advert)(evt);
    }
  };

  const handleCloseClick = (evt) => {
    toggleCarModal(advert)(evt);
  };

  return createPortal(
    <div className={css.modal_backdrop} onClick={handleBackdropClick}>
      <div className={css.modal_content}>
        <svg className={css.close_x} onClick={handleCloseClick}>
          <use href={sprite + '#icon-x'} />
        </svg>

        {children}
      </div>
    </div>,
    modalRoot
  );
};
