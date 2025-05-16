import { IconButton } from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function IconButtons() {
  return (
    <>
      <IconButton color="inherit">
        <FavoriteBorderIcon />
      </IconButton>
      <IconButton color="inherit">
        <ShoppingCartIcon />
      </IconButton>
      <IconButton color="inherit">
        <AccountCircleIcon />
      </IconButton>
    </>
  );
}

export default IconButtons;
