import { Box, Grid } from '@mui/material';
import styles from './SaleItem.module.scss';
import ButtonComponent from '../../button/Button';

export default function SaleItem() {
  return (
    <Box className={styles.saleItem}>
      <Grid container spacing={2}>
        <Grid className={styles.gridItem} size={{ sm: 12, md: 8 }}>
          <Box className={styles.gridTextContainer}>
            <div className={styles.gridText}>Save Up to $200.00</div>
            <div className={styles.gridText}>MacBook Pro</div>
            <div className={styles.gridText}>
              Apple M1 Max Chip. 32GB Unified <br /> Memory, 1TB SSD Storage
            </div>
            <ButtonComponent />
          </Box>
        </Grid>

        <Grid className={styles.gridItem} size={{ sm: 12, md: 4 }}>
          <Box className={styles.gridImageContainer}>
            <img
              src="https://res.cloudinary.com/dx2cycu19/image/upload/v1748688493/Image_1_oocvh0.png"
              alt="mac"
            />
            <span className={styles.cost}>$1100</span>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
