import { Box, Container } from '@mui/material';
import FooterLayout from '../../components/layout/footer/FooterLayout';
import HeaderLayout from '../../components/layout/header/HeaderLayout';
import styles from './HomePage.module.scss';
import Banner from '../../components/common/banner/Banner';
import { MobileBottomNavigation } from '../../components/common/header_components/mobile_navigation/MobileBottomNavigation';

function HomePage() {
  return (
    <Box className={styles.homePage}>
      <HeaderLayout />
      <MobileBottomNavigation />
      <Container maxWidth="lg" className={styles.grid}>
        <Banner />
      </Container>
      <FooterLayout />
    </Box>
  );
}
export default HomePage;
