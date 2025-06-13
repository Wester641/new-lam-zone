import { Button } from '@mui/material';
import styles from './Button.module.scss';
import { ArrowForward } from '@mui/icons-material';

function ButtonComponent() {
  return (
    <Button
      variant="contained"
      href="#contained-buttons"
      className={styles.button}
    >
      <div>Shop Now</div>
      <ArrowForward />
    </Button>
  );
}

export default ButtonComponent;
