import { Box, Container, Grid } from "@mui/material";
import styles from "./PromoSection.module.scss";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { Link } from "react-router-dom";

const promos = [
  {
    icon: <RequestQuoteIcon />,
    title: "Request a Quote",
    description:
      "Get competitive bulk pricing on any product. No commitment — just send a request.",
    linkText: "Get Quote",
    to: "/catalogue",
    color: "#e3f2fd",
  },
  {
    icon: <LocalShippingIcon />,
    title: "Bulk Orders & Shipping",
    description:
      "Wholesale quantities with worldwide delivery. Fast processing from our Dubai warehouse.",
    linkText: "View Products",
    to: "/catalogue",
    color: "#fff3e0",
  },
  {
    icon: <VerifiedUserIcon />,
    title: "Verified Supplier",
    description:
      "Trusted B2B electronics supplier in Dubai. Original products, transparent pricing.",
    linkText: "Contact Us",
    to: "/customer-support",
    color: "#e8f5e9",
  },
];

export default function PromoSection() {
  return (
    <Box className={styles.promoSection}>
      <Container maxWidth="lg" className={styles.container}>
        <Grid container spacing={3}>
          {promos.map((promo, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <div className={styles.promoCard}>
                <div
                  className={styles.iconWrapper}
                  style={{ backgroundColor: promo.color }}
                >
                  {promo.icon}
                </div>
                <div className={styles.textContent}>
                  <h3>{promo.title}</h3>
                  <p>{promo.description}</p>
                  <Link to={promo.to} className={styles.promoLink}>
                    {promo.linkText} →
                  </Link>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
