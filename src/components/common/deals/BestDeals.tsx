import ProductCard from '../../features/products/ProductCard';
import styles from './BestDeals.module.scss';

import mac from '../../../assets/images/slider_images/mac.png';

export default function BestDeals() {
  return (
    <div className={styles.bestDeals}>
      <ProductCard
        image={mac}
        title={'Macbook Pro 14'}
        oldPrice={20000000}
        price={10000000}
      />
    </div>
  );
}
