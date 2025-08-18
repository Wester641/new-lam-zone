import { Box, Container, Grid } from "@mui/material";
import HeaderLayout from "../../components/layout/header/HeaderLayout";
import { MobileBottomNavigation } from "../../components/common/header_components/mobile_navigation/MobileBottomNavigation";
import FooterLayout from "../../components/layout/footer/FooterLayout";
import styles from "./CataloguePage.module.scss";
import { products } from "../../../products";
import CatalogueProducts from "../../components/features/catalogue_products/CatalogueProducts";
import Category from "../../components/features/filter/Category/Category";
import PopularTags from "../../components/features/filter/PopularTags/PopularTags";

import WatchesBanner from "../../components/common/deals/WatchesBanner/WatchesBanner";

import PopularBrands from "../../components/features/filter/PopularBrands/PopularBrands";

function CataloguePage() {
  return (
    <Box className={styles.homePage}>
      <HeaderLayout />
      <MobileBottomNavigation />
      <Container className={styles.grid}>
        <Grid container spacing={2}>
          <Grid size={{ sm: 0, md: 2 }}>
            <Category />
            <PopularBrands />
            <PopularTags />
            <WatchesBanner />
          </Grid>
          <Grid size={{ sm: 12, md: 10 }}>
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
          </Grid>
        </Grid>
      </Container>
      <FooterLayout />
    </Box>
  );
}
export default CataloguePage;
