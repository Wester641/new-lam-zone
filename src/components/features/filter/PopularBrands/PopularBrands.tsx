import { Box } from "@mui/material";
import styles from "./PopularBrands.module.scss";

export default function PopularBrands() {
  const brands = [
    " Apple",
    "Microsoft",
    "Dell",
    "Symphony",
    "Sony",
    "LG",
    "One Plus",
  ];
  const brands2 = ["Google", "Samsung", "HP", "Xiaomi", "Panasonic", "Intel"];

  return (
    <Box className={styles.PopularBrands}>
      <h1 className={styles.PopularBrands_h1}>POPULAR BRANDS</h1>
      <Box className={styles.container}>
        <Box className={styles.PopularBrands_top}>
          {brands.map((brand, index) => (
            <label className={styles.checkbox} key={index}>
              <input type="checkbox" />
              <span className={styles.customBox}></span>
              <p className={styles.text}>{brand}</p>
            </label>
          ))}
        </Box>
        <Box className={styles.PopularBrands_bottom}>
          {brands2.map((brand, index) => (
            <label className={styles.checkbox} key={index}>
              <input type="checkbox" />
              <span className={styles.customBox}></span>
              <p className={styles.text}>{brand}</p>
            </label>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
