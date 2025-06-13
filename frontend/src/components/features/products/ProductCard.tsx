import { Box, Card } from '@mui/material';
import styles from './ProductCard.module.scss';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  image: string;
  title: string;
  state?: string;
  price: number;
  id: string;
}

function ProductCard({ image, title, price, state, id }: ProductCardProps) {
  return (
    <Card className={styles.productCard}>
      {state && <div className={styles.state}>{state}</div>}
      <Box className={styles.productCardImage}>
        <img loading="lazy" src={image} alt={title} />
      </Box>
      <Box className={styles.productCardInfo}>
        <Link className={styles.productTitle} to={`/product/${id}`}>
          {title}
        </Link>
        <span>${price}</span>
      </Box>
    </Card>
  );
}

export default ProductCard;
