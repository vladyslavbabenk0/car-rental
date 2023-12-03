import css from './LoadMoreBtn.module.css';

export const LoadMoreBtn = ({ onClick }) => {
  return (
    <button className={css.button} onClick={onClick} type="button">
      Load more
    </button>
  );
};
