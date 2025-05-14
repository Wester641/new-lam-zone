import Box from '@mui/material/Box';
import styles from './BlackFridayWidget.module.scss';
import { Button, Container, Grid } from '@mui/material';
import { ArrowForward, Close } from '@mui/icons-material';

export default function BlackFridayWidget() {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.blackFridayWidget}>
      <Container className={styles.container}>
        <Grid container spacing={0}>
          <Grid size={{ xs: 12, sm: 5, md: 4 }} className={styles.gridItems}>
            <span className={styles.blackText}>Black </span>
            <span className={styles.fridayText}>Friday</span>
          </Grid>
          <Grid
            size={{ xs: 12, sm: 5, md: 4 }}
            justifyContent="center"
            className={styles.gridItems}
          >
            <span className={styles.firstText}>Up to </span>
            <span className={styles.secondText}> 59%</span>
            <span className={styles.thirdText}>OFF</span>
          </Grid>
          <Grid size={{ sm: 5, md: 4 }} className={styles.gridItems}>
            <Button
              variant="outlined"
              className={styles.shopNow}
              endIcon={<ArrowForward />}
            >
              <span>Shop Now</span>
            </Button>
          </Grid>
        </Grid>
      </Container>
      <Close className={styles.closeButton} />
    </Box>
  );
}
