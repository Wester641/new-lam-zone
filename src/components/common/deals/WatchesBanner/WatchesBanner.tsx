import styles from "./WatchesBanner.module.scss";
import watch from "../../../../assets/image 7.svg";
import textClocks from "../../../../assets/image 8.svg";
import arrowRight from "../../../../assets/ArrowRight.svg";
import shoppingCartSimple from "../../../../assets/ShoppingCartSimple.svg";
import { Box } from "@mui/material";

export default function WatchesBanner() {
  return (
    <div className={styles.WatchesBanner}>
      <div className={styles.WatchesBanner_top}>
        <img className={styles.watchImg} src={watch} alt="watch" />
        <div className={styles.blocKtext}>
          <img
            className={styles.textClocks}
            src={textClocks}
            alt="textClocks"
          />
          <Box className={styles.blocKtext_h1}>
            Heavy on Features. Light on Price.
          </Box>
        </div>
        <div className={styles.priceBlock}>
          <p className={styles.priceBlock_p}>Only for:</p>
          <Box className={styles.Block}>$299 USD</Box>
        </div>
      </div>
      <div className={styles.WatchesBanner_bottom}>
        <button className={styles.bottom1}>
          <img src={shoppingCartSimple} alt="shoppingCartSimple" />
          <span>Add to Cart</span>
        </button>
        <button className={styles.bottom2}>
          <span>View Details</span>
          <img src={arrowRight} alt="arrowRight" />
        </button>
      </div>
    </div>
  );
}
