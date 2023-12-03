import css from './Header.module.css';

import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={css.header_wrapper}>
      <nav className={css.header_navigation}>
        <div className={css.home_navigation}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? css.activeLink : css.link;
            }}
            to="/"
          >
            Home
          </NavLink>
        </div>
        <div className={css.pages_navigation}>
          <NavLink
            className={({ isActive }) => {
              return isActive ? css.activeLink : css.link;
            }}
            to="/catalog"
          >
            Catalog
          </NavLink>
          <NavLink
            className={({ isActive }) => {
              return isActive ? css.activeLink : css.link;
            }}
            to="/favorites"
          >
            Favorite
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
