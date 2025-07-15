import { Box, Grid } from "@mui/material";
import { products } from "../../../../products";
import ProductCard from "../products/ProductCard";
import styles from "./SimilarProducts.module.scss";

function SimilarProducts() {
  const similarProducts = products.slice(0, 4);

  return (
    <Box>
      <Box className={styles.similarProductsHeader}>Similar Products</Box>
      <Grid className={styles.similarProducts} container spacing={2}>
        {similarProducts.map((product, index) => (
          <Grid size={{ xs: 6, sm: 6, md: 3 }} key={index}>
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
    </Box>
  );
}

export default SimilarProducts;
