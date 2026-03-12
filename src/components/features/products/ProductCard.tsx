import { Box, Button, Card } from "@mui/material";
import styles from "./ProductCard.module.scss";
import { Link } from "react-router-dom";

interface ProductCardProps {
  image: string;
  title: string;
  state?: string;
  price: number | string;
  id: string;
  variant?: "default" | "catalogue" | "priority";
}

function ProductCard({
  image,
  title,
  price,
  state,
  id,
  variant = "default",
}: ProductCardProps) {
  const isPriority = variant === "priority";
  const isCatalogue = variant === "catalogue";

  return (
    <Card
      className={`${styles.productCard} ${isPriority ? styles.priority : ""}`}
    >
      {state && (
        <div
          className={`${styles.state} ${isPriority ? styles.statePriority : ""}`}
        >
          {state}
        </div>
      )}
      <Box className={styles.productCardImage}>
        <img loading="lazy" src={image} alt={title} />
      </Box>
      <Box
        className={`${styles.productCardInfo} ${isPriority ? styles.productCardInfoPriority : ""}`}
      >
        <Link className={styles.productTitle} to={`/product/${id}`}>
          {title}
        </Link>
        <span>${price}</span>
      </Box>
      {isCatalogue && (
        <Box className={styles.productCardButton}>
          <Button>Get quote</Button>
        </Box>
      )}
    </Card>
  );
}

export default ProductCard;
