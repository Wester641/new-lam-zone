import styles from "./CustomerSupportPage.module.scss";

import Footer from "../../components/layout/footer/FooterLayout";
import Header from "../../components/layout/header/HeaderLayout";
import ContactUs from "../../components/features/ContactUs/ContactUs";
import SupportSection from "../../components/features/SupportSection/SupportSection";

export default function CustomerSupportPage() {
  return (
    <div className={styles.CustomerSupportPage}>
      <Header />
      <SupportSection />
      <ContactUs />
      <Footer />
    </div>
  );
}
