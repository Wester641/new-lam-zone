import { Box, Container } from '@mui/material';
import FooterLayout from '../../components/layout/footer/FooterLayout';
import HeaderLayout from '../../components/layout/header/HeaderLayout';
import styles from './ProductsDetailPage.module.scss';
import { MobileBottomNavigation } from '../../components/common/header_components/mobile_navigation/MobileBottomNavigation';
import { useParams } from 'react-router-dom';
import { products } from '../../../products';

function ProductsDetailPage() {
  const { id } = useParams();

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <Box className={styles.homePage}>
        <HeaderLayout />
        <MobileBottomNavigation />
        <Container className={styles.grid}>
          <h1>Not Found!</h1>
        </Container>
        <FooterLayout />
      </Box>
    );
  }

  return (
    <Box className={styles.homePage}>
      <HeaderLayout />
      <MobileBottomNavigation />
      <Container className={styles.grid}>
        <Box className={styles.box}>
          <img loading="lazy" src={product.image} alt={product.title} />
          <h1>Product Detail Page: id: {id}</h1>
          <span>{product.title}</span>
          <span>{product.stock_state}</span>
        </Box>
      </Container>
      <FooterLayout />
    </Box>
  );
}

export default ProductsDetailPage;
