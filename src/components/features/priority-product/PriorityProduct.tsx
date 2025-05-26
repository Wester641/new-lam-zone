import { Box, Card } from '@mui/material';
import styles from './PriorityProduct.module.scss';

interface PriorityProductProps {
  image: string;
  title: string;
  state?: string;
  price: number;
}

function PriorityProduct({ image, title, price, state }: PriorityProductProps) {
  return (
    <Card className={styles.priorityProduct}>
      {state && <div className={styles.state}>{state}</div>}
      <Box className={styles.priorityProductImage}>
        <img src={image} alt={title} />
      </Box>
      <Box className={styles.priorityProductInfo}>
        <span>{title}</span>
        <span>${price}</span>
      </Box>
    </Card>
  );
}

export default PriorityProduct;
