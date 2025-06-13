import { Box, Card } from '@mui/material';
import styles from './PriorityProduct.module.scss';
import { Link } from 'react-router-dom';

interface PriorityProductProps {
  image: string;
  title: string;
  state?: string;
  price: number;
  id: string;
}

function PriorityProduct({
  image,
  title,
  price,
  state,
  id,
}: PriorityProductProps) {
  return (
    <Card className={styles.priorityProduct}>
      {state && <div className={styles.state}>{state}</div>}
      <Box className={styles.priorityProductImage}>
        <img loading="lazy" src={image} alt={title} />
      </Box>
      <Box className={styles.priorityProductInfo}>
        <Link className={styles.productTitle} to={`/product/${id}`}>
          {title}
        </Link>
        <span>${price}</span>
      </Box>
    </Card>
  );
}

export default PriorityProduct;
