import style from "./Category.module.scss";
export default function Category() {
  const categories = [
    "Electronics Devices",
    "Computer & Laptop",
    "Computer Accessories",
    "SmartPhone",
    "Headphone",
    "Mobile Accessories",
    "Gaming Console",
    "Camera & Photo",
    "TV & Homes Appliances",
    "Watchs & Accessories",
    "GPS & Navigation",
    "Warable Technology",
  ];

  return (
    <div className={style.Category}>
      <h1 className={style.Category_h1}>Category</h1>

      {categories.map((category, index) => (
        <div className={style.checkbox} key={index}>
          <label className={style.radioLabel}>
            <input type="radio" name="option" />
            <span className={style.customRadio}></span>
            <p className={style.checkbox_p}>{category}</p>
          </label>
        </div>
      ))}
    </div>
  );
}
