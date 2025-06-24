import { Box, Grid } from '@mui/material';
import styles from './FeaturedProducts.module.scss';

// import mac from '../../../../assets/images/slider_images/mac.png';
import ProductCard from '../../../features/products/ProductCard';
import featured from '../../../../assets/images/featured_products.jpg';
import ButtonComponent from '../../button/Button';

import { products } from '../../../../../products';

// const length = 8;

const filterItems = ['All Product', 'Smart Phone', 'Laptop', 'Headphone', 'TV'];

export default function FeaturedProducts() {
  return (
    <div className={styles.featuredProducts}>
      <Box>
        <Grid container>
          <Grid size={{ sm: 0, md: 3 }}>
            <Box className={styles.featuredImage}>
              <div className={styles.featuredImageContainer}>
                <span>Computer & Accessories</span>
                <span>32% Discount</span>
                <span>For all ellectronics products</span>
                <span>Offers ends in: 00:00:00</span>
                <ButtonComponent />
              </div>
              <img src={featured} alt="featured" />
            </Box>
          </Grid>

          <Grid
            size={{ sm: 12, md: 9 }}
            className={styles.featuredProductsGrid}
          >
            <Box className={styles.featuredProductsHeader}>
              <h3>Featured Products</h3>
              <div className={styles.featuredProductsFilterItems}>
                {filterItems.map((item, index) => (
                  <span key={index}>{item}</span>
                ))}
                <a href="#">Browse All Product</a>
              </div>
            </Box>
            <Grid container spacing={2}>
              {products.map((product, index) => (
                <Grid size={{ sm: 6, md: 3 }} key={index}>
                  <ProductCard
                    id={`${product.id}`}
                    state="Featured"
                    image={product.image}
                    title={product.title}
                    price={product.price}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
