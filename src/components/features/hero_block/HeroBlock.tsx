import { Box, Container, Grid, InputBase } from "@mui/material";
import styles from "./HeroBlock.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import InventoryIcon from "@mui/icons-material/Inventory";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

const stats = [
  { icon: <InventoryIcon />, value: "500+", label: "Products" },
  { icon: <BrandingWatermarkIcon />, value: "50+", label: "Brands" },
  { icon: <LocalOfferIcon />, value: "B2B", label: "Pricing" },
];

export default function HeroBlock() {
  return (
    <Box className={styles.heroBlock}>
      <Container maxWidth="lg">
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Wholesale Electronics <span>from Dubai</span>
          </h1>
          <p className={styles.subtext}>
            Laptops, smartphones & accessories at bulk prices. Request a quote —
            no minimum order.
          </p>
          <div className={styles.searchBar}>
            <InputBase
              placeholder="Search products, brands, categories..."
              className={styles.input}
              fullWidth
            />
            <button className={styles.searchButton}>
              <SearchIcon />
            </button>
          </div>
        </div>
        <Grid container spacing={2} className={styles.statsRow}>
          {stats.map((stat, index) => (
            <Grid size={{ xs: 4 }} key={index}>
              <div className={styles.statCard}>
                {stat.icon}
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
