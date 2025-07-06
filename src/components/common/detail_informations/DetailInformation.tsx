import { Box } from "@mui/material";
import styles from "./DetailInformation.module.scss";

function DetailInformation({ product }: { product: any }) {
  return (
    <div>
      <Box className={styles.box}>
        <span className={styles.title}>{product.title}</span>
      </Box>
      <Box className={styles.box}>
        <img loading="lazy" src={product.image} alt={product.title} />
        <aside className={styles.aside}>
          <div className={styles.asideInfo}>
            <span className={styles.priceOnEnquiry}>Price On Enquiry</span>
            <span className={styles.priceOnEnquiry}>
              <strong>Minimum 1</strong> Unit per order.
              <br /> (100 available in United arab emirates)
            </span>
          </div>
          <div className={styles.asideInfo}>
            <span>
              Sku: <strong>{product.sku}</strong>
            </span>
            <span>
              Brand: <strong>{product.sku}</strong>
            </span>
            <span>
              Availability: <strong>{product.sku}</strong>
            </span>
            <span>
              Category: <strong>{product.sku}</strong>
            </span>
          </div>
        </aside>
      </Box>
    </div>
  );
}

export default DetailInformation;
