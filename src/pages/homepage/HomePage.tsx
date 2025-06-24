import { Box, Container } from '@mui/material';
import FooterLayout from '../../components/layout/footer/FooterLayout';
import HeaderLayout from '../../components/layout/header/HeaderLayout';
import styles from './HomePage.module.scss';
import Banner from '../../components/common/banner/Banner';
import { MobileBottomNavigation } from '../../components/common/header_components/mobile_navigation/MobileBottomNavigation';
import Divider from '../../components/common/divider/Divider';
import ShopWithCategories from '../../components/common/deals/shop_with_categories/ShopWithCategories';
import FeaturedProducts from '../../components/common/deals/featured_products/FeaturedProducts';
import BestDeals from '../../components/common/deals/best_deals/BestDeals';
import SaleItem from '../../components/common/deals/sale_item/SaleItem';

function HomePage() {
  return (
    <Box className={styles.homePage}>
      <HeaderLayout />
      <MobileBottomNavigation />
      <Container className={styles.grid}>
        <Banner />
        <Divider />
        <BestDeals />
        <Divider />
        <ShopWithCategories />
        <Divider />
        <FeaturedProducts />
        <Divider />
        <SaleItem />
        <Divider />
      </Container>
      <FooterLayout />
    </Box>
  );
}

export default HomePage;
