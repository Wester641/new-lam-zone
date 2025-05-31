import { Box, Container } from '@mui/material';
import FooterLayout from '../../components/layout/footer/FooterLayout';
import HeaderLayout from '../../components/layout/header/HeaderLayout';
import styles from './ProductsDetailPage.module.scss';
import { MobileBottomNavigation } from '../../components/common/header_components/mobile_navigation/MobileBottomNavigation';

function ProductsDetailPage() {
  return (
    <Box className={styles.homePage}>
      <HeaderLayout />
      <MobileBottomNavigation />
      <Container className={styles.grid}>
        {/* <Banner />
        <Divider />
        <BestDeals />
        <Divider />
        <ShopWithCategories />
        <Divider />
        <FeaturedProducts />
        <Divider /> */}
      </Container>
      <FooterLayout />
    </Box>
  );
}

export default ProductsDetailPage;
