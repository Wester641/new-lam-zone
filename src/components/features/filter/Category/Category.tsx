import style from "./Category.module.scss";

export default function Category() {
  return (
    <div className={style.Category}>
      <h1>Category</h1>
      <div className={style.checkbox}>
        <label className={style.radioLabel}>
          <input type="radio" name="option" />
          <span className={style.customRadio}></span>
          <p className={style.checkbox_p}>Electronics Devices</p>
        </label>
      </div>
      <div className={style.checkbox}>
        <label className={style.radioLabel}>
          <input type="radio" name="option" />
          <span className={style.customRadio}></span>
          <p className={style.checkbox_p}>Computer & Laptop</p>
        </label>
      </div>
      <div className={style.checkbox}>
        <label className={style.radioLabel}>
          <input type="radio" name="option" />
          <span className={style.customRadio}></span>
          <p className={style.checkbox_p}>Computer Accessories</p>
        </label>
      </div>
      <div className={style.checkbox}>
        <label className={style.radioLabel}>
          <input type="radio" name="option" />
          <span className={style.customRadio}></span>
          <p className={style.checkbox_p}>SmartPhone</p>
        </label>
      </div>
      <div className={style.checkbox}>
        <label className={style.radioLabel}>
          <input type="radio" name="option" />
          <span className={style.customRadio}></span>
          <p className={style.checkbox_p}>Headphone</p>
        </label>
      </div>
      <div className={style.checkbox}>
        <label className={style.radioLabel}>
          <input type="radio" name="option" />
          <span className={style.customRadio}></span>
          <p className={style.checkbox_p}>Mobile Accessories</p>
        </label>
      </div>
      <div className={style.checkbox}>
        <label className={style.radioLabel}>
          <input type="radio" name="option" />
          <span className={style.customRadio}></span>
          <p className={style.checkbox_p}>Gaming Console</p>
        </label>
      </div>
      <div className={style.checkbox}>
        <label className={style.radioLabel}>
          <input type="radio" name="option" />
          <span className={style.customRadio}></span>
          <p className={style.checkbox_p}>Camera & Photo</p>
        </label>
      </div>
      <div className={style.checkbox}>
        <label className={style.radioLabel}>
          <input type="radio" name="option" />
          <span className={style.customRadio}></span>
          <p className={style.checkbox_p}>TV & Homes Appliances</p>
        </label>
      </div>
      <div className={style.checkbox}>
        <label className={style.radioLabel}>
          <input type="radio" name="option" />
          <span className={style.customRadio}></span>
          <p className={style.checkbox_p}>Watchs & Accessories</p>
        </label>
      </div>
      <div className={style.checkbox}>
        <label className={style.radioLabel}>
          <input type="radio" name="option" />
          <span className={style.customRadio}></span>
          <p className={style.checkbox_p}>GPS & Navigation</p>
        </label>
      </div>
      <div className={style.checkbox}>
        <label className={style.radioLabel}>
          <input type="radio" name="option" />
          <span className={style.customRadio}></span>
          <p className={style.checkbox_p}>Warable Technology</p>
        </label>
      </div>
    </div>
  );
}
