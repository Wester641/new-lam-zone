import { Box, Container, Grid } from "@mui/material";
import HeaderLayout from "../../components/layout/header/HeaderLayout";
import { MobileBottomNavigation } from "../../components/common/header_components/mobile_navigation/MobileBottomNavigation";
import FooterLayout from "../../components/layout/footer/FooterLayout";
import styles from "./CataloguePage.module.scss";
import { products } from "../../../products";
import CatalogueProducts from "../../components/features/catalogue_products/CatalogueProducts";

function CataloguePage() {
  return (
    <Box className={styles.homePage}>
      <HeaderLayout />
      <MobileBottomNavigation />
      <Container className={styles.grid}>
        <Grid container spacing={2}>
          {products.map((product, index) => (
            <Grid size={{ sm: 6, md: 2 }} key={index}>
              <CatalogueProducts
                id={`${product.id}`}
                state="Featured"
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <FooterLayout />
    </Box>
  );
}
export default CataloguePage;
