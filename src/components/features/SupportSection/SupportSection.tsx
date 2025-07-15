import styles from "./SupportSection.module.scss";
import CreditCard from "../../../assets/images/icons_For_SupportSection/CreditCard.svg";
import LockOpen from "../../../assets/images/icons_For_SupportSection/LockOpen.svg";
import Storefront from "../../../assets/images/icons_For_SupportSection/Storefront.svg";
import Truck from "../../../assets/images/icons_For_SupportSection/Truck.svg";
import { Box } from "@mui/material";

export default function SupportSection() {
  const block = [
    "How do I return my item?",
    "What is Returns Policy?",
    "How long is the refund process?",
    "What are the 'Delivery Timelines'?",
    "How to cancel Order.",
    "Ask the Digital and Device Community.",
  ];

  const supportOptions = [
    { img: CreditCard, text: "Track Order" },
    { img: LockOpen, text: "Wishlist & Compare" },
    { img: Storefront, text: "Payment Option" },
    { img: Truck, text: "Shoping Cart & Wallet" },
  ];

  return (
    <Box className={styles.SupportSection}>
      <div className={styles.SupportHub}>
        <div className={styles.SupportSection_bottom}>
          <img
            className={styles.SupportSection_bottom_img}
            src={
              "https://res.cloudinary.com/dx2cycu19/image/upload/v1752593152/man_with_laptop1_koogx0.jpg"
            }
            alt="Support Illustration"
          />
        </div>
      </div>
      <div className={styles.SupportBlock}>
        <h1 className={styles.SupportBlock_h1}>
          What can we assist you with today?
        </h1>
        <div className={styles.SupportBlock_container}>
          {supportOptions.map((supportOptions, index) => (
            <div className={styles.SupportBlock_block} key={index}>
              <img
                className={styles.SupportBlock_block_img}
                src={supportOptions.img}
                alt="img"
              />
              <p>{supportOptions.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.SupportSection_container}>
        <h1 className={styles.SupportSection_text1}>Popular Topics</h1>
        <div className={styles.PopularTopics}>
          {block.map((block, index) => (
            <div className={styles.PopularTopics_block} key={index}>
              • {block}
            </div>
          ))}
        </div>
      </div>
    </Box>
  );
}
