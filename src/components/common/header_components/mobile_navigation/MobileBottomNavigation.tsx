import { Box, IconButton } from '@mui/material';
import styles from './MobileBottomNavigation.module.scss';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';

import { Link } from 'react-router-dom';

export const MobileBottomNavigation = () => {
  return (
    <Box className={styles.container}>
      <ul>
        <Link to={'/'} className={styles.link}>
          <li>
            <IconButton color="inherit" className={styles.iconButton}>
              <HomeOutlinedIcon />
            </IconButton>
            <span>Home</span>
          </li>
        </Link>
        <Link to={'/'} className={styles.link}>
          <li>
            <IconButton color="inherit" className={styles.iconButton}>
              <ManageSearchIcon />
            </IconButton>
            <span>Сatalogue</span>
          </li>
        </Link>
        <Link to={'/'} className={styles.link}>
          <li>
            <IconButton color="inherit" className={styles.iconButton}>
              <ShoppingBagOutlinedIcon />
            </IconButton>
            <span>Cart</span>
          </li>
        </Link>
        <Link to={'/'} className={styles.link}>
          <li>
            <IconButton color="inherit" className={styles.iconButton}>
              <FavoriteBorderIcon />
            </IconButton>
            <span>Favorites</span>
          </li>
        </Link>
        <Link to={'/'} className={styles.link}>
          <li>
            <IconButton color="inherit" className={styles.iconButton}>
              <PersonOutlineOutlinedIcon />
            </IconButton>
            <span>Account</span>
          </li>
        </Link>
      </ul>
    </Box>
  );
};
