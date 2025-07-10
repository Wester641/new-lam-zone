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
    <div className={styles.PopularBrands}>
      <h1>POPULAR BRANDS</h1>
      <div className={styles.container}>
        <div className={styles.PopularBrands_top}>
          {brands.map((brand, index) => (
            <label className={styles.checkbox} key={index}>
              <input type="checkbox" />
              <span className={styles.customBox}></span>
              <p className={styles.text}>{brand}</p>
            </label>
          ))}
        </div>
        <div className={styles.PopularBrands_bottom}>
          {brands2.map((brand, index) => (
            <label className={styles.checkbox} key={index}>
              <input type="checkbox" />
              <span className={styles.customBox}></span>
              <p className={styles.text}>{brand}</p>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}
