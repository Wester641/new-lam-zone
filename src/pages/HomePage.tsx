import { Box, Grid } from '@mui/material';
import FooterLayout from '../components/layout/footer/FooterLayout';
import HeaderLayout from '../components/layout/header/HeaderLayout';
import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <Box className={styles.homePage}>
      <HeaderLayout />
      <Grid container direction="column" className={styles.grid}>
        <Grid
          size={{ xs: 12, sm: 12, md: 12 }}
          className={styles.gridItem}
        ></Grid>

        <Grid size={{ xs: 12, sm: 12, md: 12 }} className={styles.gridItem}>
          {/* <Banner />
          <SupportWidget /> */}
        </Grid>
      </Grid>
      <FooterLayout />
    </Box>
  );
}
export default HomePage;
