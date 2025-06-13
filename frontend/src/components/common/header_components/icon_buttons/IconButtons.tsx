import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { NavLink } from 'react-router-dom';
import styles from './IconButtons.module.scss';

function IconButtons() {
  return (
    <>
      <IconButton color="inherit">
        <NavLink
          to={'/favorites'}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          <FavoriteBorderIcon />
        </NavLink>
      </IconButton>
      <IconButton color="inherit">
        <NavLink
          to={'/cart'}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          <ShoppingCartIcon />
        </NavLink>
      </IconButton>
      <IconButton color="inherit">
        <NavLink
          to={'/account'}
          className={({ isActive }) => (isActive ? styles.active : styles.link)}
        >
          <AccountCircleIcon />
        </NavLink>
      </IconButton>
    </>
  );
}

export default IconButtons;
