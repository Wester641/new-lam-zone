import { Box, Grid } from "@mui/material";
import styles from "./DetailInformation.module.scss";

function DetailInformation({ product }: { product: any }) {
  return (
    <div>
      <Box className={styles.box}>
        <span className={styles.title}>{product.title}</span>
      </Box>
      <Grid container spacing={2} className={styles.box}>
        <Grid className={styles.gridItem} size={{ xs: 12, sm: 12, md: 4 }}>
          <img loading="lazy" src={product.image} alt={product.title} />
        </Grid>
        <Grid className={styles.gridItem} size={{ xs: 12, sm: 12, md: 7 }}>
          <aside className={styles.aside}>
            <Box className={styles.asideInfo}>
              <span className={styles.priceOnEnquiry}>Price On Enquiry</span>
              <span className={styles.priceOnEnquiry}>
                <strong>Minimum 1 Unit per order.</strong>
                <br /> (100 available in United arab emirates)
              </span>
            </Box>
            <Box className={styles.asideInfo}>
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
            </Box>
            <Box className={styles.asideInfo}>
              <span className={styles.price}>${product.price}</span>
              <span className={styles.oldPrice}>$1100</span>
            </Box>
            {/* <span className={styles.border}></span> */}
            <Box className={styles.asideInfo}>
              <span>
                Color: <strong>{product.color}</strong>
              </span>
              <span>
                Size: <strong>{product.size}</strong>
                <select name="size" id="">
                  <option value="">Select Size</option>
                  <option value="">13-inch</option>
                  <option value="">14-inch</option>
                  <option value="">16-inch</option>
                </select>
              </span>
              <span>
                Memory: <strong>{product.memory}</strong>
                <select name="memory" id="">
                  <option value="">Select Memory</option>
                  <option value="">8GB unified memory</option>
                  <option value="">16GB unified memory</option>
                  <option value="">32GB unified memory</option>
                </select>
              </span>
              <span>
                Storage: <strong>{product.storage}</strong>
                <select name="storage" id="">
                  <option value="">Select Storage</option>
                  <option value="">128GB unified storage</option>
                  <option value="">256GB unified storage</option>
                  <option value="">512GB unified storage</option>
                  <option value="">1TB unified storage</option>
                </select>
              </span>
            </Box>
          </aside>
        </Grid>
      </Grid>

      {/* Product Details */}
      <Box className={styles.productInformation}>Product Information</Box>
      <Box className={styles.productInformationBox}>
        <Box className={styles.productInformationBoxItem}>
          Payment: <span>{product.sku}</span>
        </Box>
        <Box className={styles.productInformationBoxItem}>
          Listed on: <span>{product.sku}</span>
        </Box>
        <Box className={styles.productInformationBoxItem}>
          Delivery: <span>{product.sku}</span>
        </Box>
        <Box className={styles.productInformationBoxItem}>
          SKU: <span>{product.sku}</span>
        </Box>
        <Box className={styles.productInformationBoxItem}>
          Valid till: <span>{product.sku}</span>
        </Box>
        <Box className={styles.productInformationBoxItem}>
          Product ID: <span>{product.sku}</span>
        </Box>
      </Box>
      <Box className={styles.productInformationAdditionalInfo}>
        Additional Info: <span>{product.sku}</span>
      </Box>
    </div>
  );
}

export default DetailInformation;
