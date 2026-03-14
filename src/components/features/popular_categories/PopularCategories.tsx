import { Box, Container, Grid } from "@mui/material";
import styles from "./PopularCategories.module.scss";
import { Link } from "react-router-dom";
import LaptopIcon from "@mui/icons-material/Laptop";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import KeyboardIcon from "@mui/icons-material/Keyboard";
import TvIcon from "@mui/icons-material/Tv";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import WatchIcon from "@mui/icons-material/Watch";
import TabletIcon from "@mui/icons-material/Tablet";

const categories = [
  {
    icon: <LaptopIcon />,
    label: "Laptops & Notebooks",
    count: "120+ Products",
    color: "#e3f2fd",
  },
  {
    icon: <SmartphoneIcon />,
    label: "Smartphones",
    count: "85+ Products",
    color: "#fce4ec",
  },
  {
    icon: <HeadphonesIcon />,
    label: "Headphones & Audio",
    count: "64+ Products",
    color: "#f3e5f5",
  },
  {
    icon: <KeyboardIcon />,
    label: "Accessories",
    count: "200+ Products",
    color: "#e8f5e9",
  },
  {
    icon: <TvIcon />,
    label: "TV & Monitors",
    count: "45+ Products",
    color: "#fff3e0",
  },
  {
    icon: <SportsEsportsIcon />,
    label: "Gaming & Consoles",
    count: "38+ Products",
    color: "#e0f7fa",
  },
  {
    icon: <WatchIcon />,
    label: "Smart Watches",
    count: "52+ Products",
    color: "#fff8e1",
  },
  {
    icon: <TabletIcon />,
    label: "Tablets & iPads",
    count: "30+ Products",
    color: "#f1f8e9",
  },
];

export default function PopularCategories() {
  return (
    <Box className={styles.popularCategories}>
      <Container maxWidth="lg">
        <div className={styles.header}>
          <h2>Popular Categories</h2>
          <Link to="/catalogue" className={styles.seeAll}>
            See All Categories
          </Link>
        </div>
        <Grid container spacing={2}>
          {categories.map((cat, index) => (
            <Grid size={{ xs: 6, sm: 6, md: 3 }} key={index}>
              <Link to="/catalogue" className={styles.categoryCard}>
                <div
                  className={styles.iconWrapper}
                  style={{ backgroundColor: cat.color }}
                >
                  {cat.icon}
                </div>
                <div className={styles.info}>
                  <span className={styles.label}>{cat.label}</span>
                  <span className={styles.count}>{cat.count}</span>
                </div>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
