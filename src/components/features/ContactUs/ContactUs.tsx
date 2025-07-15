import { Box } from "@mui/material";
import styles from "./ContactUs.module.scss";

import PhoneIcon from "../../../assets/PhoneCall.svg";
import chatIcon from "../../../assets/ChatCircleDots.svg";

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
          <span>
            <img
              className={styles.ContactUs_containe_img}
              src={PhoneIcon}
              alt="PhoneIcon"
            />
          </span>
          <div className={styles.ContactUs_containe_block}>
            <p className={styles.text1}>Call us now</p>
            <p className={styles.text1}>
              We are available online from 9:00 AM to 5:00 PM
            </p>
            <p className={styles.text1}> +996 500 37 00 02 </p>
            <button className={styles.block_button}>Call now</button>
          </div>
        </div>
        <div className={styles.ContactUs_containe}>
          <span>
            <img
              className={styles.ContactUs_containe_img}
              src={chatIcon}
              alt="chatIcon"
            />
          </span>
          <div className={styles.ContactUs_containe_block}>
            <p className={styles.text1}>Chat with us</p>
            <p className={styles.text1}>
              we are available online from 9:00 AM to 5:00 PM
            </p>
            <p className={styles.text1}> zafarzhon@gmail.com </p>
            <button className={styles.block_button}>Chat now</button>
          </div>
        </div>
      </div>
    </Box>
  );
}
