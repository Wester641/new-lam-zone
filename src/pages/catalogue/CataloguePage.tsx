import { Box, Container, Grid } from '@mui/material';
import HeaderLayout from '../../components/layout/header/HeaderLayout';
import { MobileBottomNavigation } from '../../components/common/header_components/mobile_navigation/MobileBottomNavigation';
import FooterLayout from '../../components/layout/footer/FooterLayout';
import styles from './CataloguePage.module.scss';

const categories = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3];

function CataloguePage() {
  return (
    <Box className={styles.homePage}>
      <HeaderLayout />
      <MobileBottomNavigation />
      <Container className={styles.grid}>
        <Grid container spacing={2}>
          {categories.map(category => (
            <Grid className={styles.gridItem} size={{ xs: 6, md: 3 }}>
              {category}
            </Grid>
          ))}
        </Grid>
      </Container>
      <FooterLayout />
    </Box>
  );
}
export default CataloguePage;
