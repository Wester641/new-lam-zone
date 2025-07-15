import styles from "./SupportSection.module.scss";
import CreditCard from "../../../assets/images/icons_For_SupportSection/CreditCard.svg";
import LockOpen from "../../../assets/images/icons_For_SupportSection/LockOpen.svg";
import Notepad from "../../../assets/images/icons_For_SupportSection/Notepad.svg";
import Stack from "../../../assets/images/icons_For_SupportSection/Stack.svg";
import Storefront from "../../../assets/images/icons_For_SupportSection/Storefront.svg";
import Truck from "../../../assets/images/icons_For_SupportSection/Truck.svg";
import User from "../../../assets/images/icons_For_SupportSection/User.svg";
import man_with_laptop from "../../../assets/images/icons_For_SupportSection/man with laptop1.png";
import { Box } from "@mui/material";
import House from "../../../assets/images/icons_For_SupportSection/House.png";

export default function SupportSection() {
  const block = [
    "How do I return my item?",
    "What is Clicon's Returns Policy?",
    "How long is the refund process?",
    "What are the 'Delivery Timelines'?",
    "What is 'Discover Your Daraz Campaign 2022'?",
    "What is the Voucher & Gift Offer in this Campaign?",
    "How to cancel Clicon Order.",
    "Ask the Digital and Device Community.",
    "How to change my shop name?",
  ];

  const supportOptions = [
    { img: CreditCard, text: "Track Order" },
    { img: LockOpen, text: "Wishlist & Compare" },
    { img: Notepad, text: "Reset Password" },
    { img: Stack, text: "Shipping & Billing" },
    { img: Storefront, text: "Payment Option" },
    { img: Truck, text: "Shoping Cart & Wallet" },
    { img: User, text: "User & Account" },
    { img: User, text: "Sell on Clicon" },
  ];

  return (
    <Box className={styles.SupportSection}>
      <div className={styles.SupportHub}>
        <div className={styles.SupportSection_bottom}>
          <img
            className={styles.SupportSection_bottom_img}
            src={man_with_laptop}
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
