import { Box } from "@mui/material";
import styles from "./ContactUs.module.scss";

import PhoneIcon from "../../../assets/images/PhoneIcon.png";

import Icon2 from "../../../assets/images/Icon2.png";

export default function ContactUs() {
  return (
    <Box className={styles.ContactUs}>
      <div className={styles.ContactUs_topText}>
        <button className={styles.ContactUs_topText_button}>Contact Us</button>
        <h1 className={styles.ContactUs_topText_h1}>
          Don’t find your answer. Contact with us
        </h1>
      </div>
      <div className={styles.ContactUs_bottom}>
        <div className={styles.ContactUs_containe}>
          <img
            className={styles.ContactUs_containe_img}
            src={PhoneIcon}
            alt=""
          />
          <div className={styles.ContactUs_containe_block}>
            <p className={styles.text1}>Call us now</p>
            <p className={styles.text1}>
              We are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk
              with us now
            </p>
            <p className={styles.text1}> +1-202-555-0126 </p>
            <button className={styles.block_button}>Call now</button>
          </div>
        </div>
        <div className={styles.ContactUs_containe}>
          <img className={styles.ContactUs_containe_img} src={Icon2} alt="" />
          <div className={styles.ContactUs_containe_block}>
            <p className={styles.text1}>Chat with us</p>
            <p className={styles.text1}>
              we are available online from 9:00 AM to 5:00 PM (GMT95:45) Talk
              with use now
            </p>
            <p className={styles.text1}> Support@clicon.com </p>
            <button className={styles.block_button}>Call now</button>
          </div>
        </div>
      </div>
    </Box>
  );
}
