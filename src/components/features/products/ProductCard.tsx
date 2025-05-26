import { Box, Card } from '@mui/material';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  image: string;
  title: string;
  state?: string;
  price: number;
}

function ProductCard({ image, title, price, state }: ProductCardProps) {
  return (
    <Card className={styles.productCard}>
      {state && <div className={styles.state}>{state}</div>}
      <Box className={styles.productCardImage}>
        <img src={image} alt={title} />
      </Box>
      <Box className={styles.productCardInfo}>
        <span>{title}</span>
        <span>${price}</span>
      </Box>
    </Card>
  );
}

export default ProductCard;
