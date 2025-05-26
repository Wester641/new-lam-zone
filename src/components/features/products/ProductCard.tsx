import { Box, Card } from '@mui/material';
import styles from './ProductCard.module.scss';

interface ProductCardProps {
  image: string;
  title: string;
  oldPrice: number;
  price: number;
}

function ProductCard({ image, title, oldPrice, price }: ProductCardProps) {
  return (
    <Card className={styles.productCard}>
      <Box className={styles.productCardImage}>
        <img src={image} alt={title} />
      </Box>
      <Box className={styles.productCardInfo}>
        <span>{title}</span>
        <span>Old Price: {oldPrice}</span>
        <span>Price: {price}</span>
      </Box>
    </Card>
  );
}

export default ProductCard;
