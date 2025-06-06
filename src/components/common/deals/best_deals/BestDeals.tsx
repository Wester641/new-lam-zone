import { Box, Grid } from '@mui/material';
import styles from './BestDeals.module.scss';

import mac from '../../../../assets/images/slider_images/mac.png';
import PriorityProduct from '../../../features/priority-product/PriorityProduct';
import ProductCard from '../../../features/products/ProductCard';
import { products } from '../../../../../products';

const macAir = products.slice(1, 2);

export default function BestDeals() {
  return (
    <div className={styles.bestDeals}>
      <Box className={styles.bestDealsHeader}>
        <div className={styles.bestDealsHeaderTitle}>
          <h2>Best Deals</h2>
          <span>Deals Ends in 00:00:00</span>
        </div>
        <a href="#">Browse All Product</a>
      </Box>
      <Box>
        <Grid container spacing={2}>
          <Grid size={{ sm: 12, md: 4 }}>
            <PriorityProduct
              id={`${macAir[0].id}`}
              state="Sold Out"
              image={mac}
              title={'MacBook Air (13-inch, M2, 2022)'}
              price={750}
            />
          </Grid>

          <Grid size={{ sm: 12, md: 8 }}>
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
