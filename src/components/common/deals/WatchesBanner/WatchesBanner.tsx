import styles from "./WatchesBanner.module.scss";
import watch from "../../../../assets/images/BannerClockImages/watch.png";
import textClocks from "../../../../assets/images/BannerClockImages/textClocks.png";

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
          <h1 className={styles.blocKtext_h1}>
            Heavy on Features. Light on Price.
          </h1>
        </div>
        <div className={styles.priceBlock}>
          <p className={styles.priceBlock_p}>Only for:</p>
          <h1 className={styles.Block}>$299 USD</h1>
        </div>
      </div>
      <div className={styles.WatchesBanner_bottom}>
        <button className={styles.bottom1}>Add to Cart</button>
        <button className={styles.bottom2}>View Details</button>
      </div>
    </div>
  );
}
