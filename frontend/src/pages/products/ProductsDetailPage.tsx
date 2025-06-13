import { Box, Container, Grid } from '@mui/material';
import FooterLayout from '../../components/layout/footer/FooterLayout';
import HeaderLayout from '../../components/layout/header/HeaderLayout';
import styles from './ProductsDetailPage.module.scss';
import { MobileBottomNavigation } from '../../components/common/header_components/mobile_navigation/MobileBottomNavigation';
import { useParams } from 'react-router-dom';
import { products } from '../../../products';
import AskForQuotation from '../../components/common/ask_for_quotation/AskForQuotation';

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
        <Grid container>
          <Grid size={{ xs: 12, md: 9 }} className={styles.gridItem}>
            <Box className={styles.box}>
              <img loading="lazy" src={product.image} alt={product.title} />
              <h1>Product Detail Page: id: {id}</h1>
              <span>{product.title}</span>
              <span>{product.stock_state}</span>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 3 }} className={styles.gridItem}>
            <AskForQuotation product={product} />
          </Grid>
        </Grid>
      </Container>
      <FooterLayout />
    </Box>
  );
}

export default ProductsDetailPage;
