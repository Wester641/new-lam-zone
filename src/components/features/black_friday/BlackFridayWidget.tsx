import Box from '@mui/material/Box';
import styles from './BlackFridayWidget.module.scss';
import { AppBar, Button, Container, Typography } from '@mui/material';
import { ArrowForward, Close } from '@mui/icons-material';

export default function BlackFridayWidget() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={styles.blackFridayWidget}>
        <Container maxWidth="lg" className={styles.container}>
          <Typography className={styles.blackTypegraphy} noWrap component="div">
            <span className={styles.blackText}>Black </span>
            <span className={styles.fridayText}>Friday</span>
          </Typography>{' '}
          <Typography className={styles.blackTypegraphy} noWrap component="div">
            <span className={styles.firstText}>Up to </span>
            <span className={styles.secondText}> 59%</span>
            <span className={styles.thirdText}>OFF</span>
          </Typography>
          <Typography className={styles.blackTypegraphy} noWrap component="div">
            <Button
              variant="outlined"
              className={styles.shopNow}
              endIcon={<ArrowForward />}
            >
              Shop Now
            </Button>
          </Typography>
          <Typography className={styles.blackTypegraphy} noWrap component="div">
            <Close className={styles.closeButton} />
          </Typography>
        </Container>
      </AppBar>
    </Box>
  );
}
