import styles from "./PopularTags.module.scss";

export default function PopularTags() {
  const brands = [
    "Game",
    "iPhone",
    "TV",
    "Asus Laptops",
    "Macbook",
    "SSD",
    "Graphics Card",
    "Power Bank",
    "Smart TV",
    "Speaker",
    "Tablet",
    "Microwave",
    "Samsung",
  ];

  return (
    <div className={styles.PopularTags}>
      <h1 className={styles.PopularTag_h1}>Popular Tag</h1>
      <div className={styles.PopularTagBlock}>
        {brands.map((brand, index) => (
          <button className={styles.button1} key={index}>
            {brand}
          </button>
        ))}
      </div>
    </div>
  );
}
