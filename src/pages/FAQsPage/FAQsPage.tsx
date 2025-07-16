import styles from "./FAQsPage.module.scss";
import Footer from "../../components/layout/footer/FooterLayout";
import Header from "../../components/layout/header/HeaderLayout";
import FrequentlyAskedQuestions from "../../components/common/Frequently_Asked_Questions/FrequentlyAskedQuestions";

import { Box, Container, Grid } from "@mui/material";
import AskForSupport from "../../components/common/AskForSupport/AskForSupport";

export default function FAQsPage() {
  return (
    <Box className={styles.FAQsPage}>
      <Header />
      <Container className={styles.FAQsPage_Container}>
        <Grid container spacing={44}>
          <Grid size={{ xs: 6 }}>
            <FrequentlyAskedQuestions />
          </Grid>
          <Grid size={{ xs: 6 }}>
            <AskForSupport />
          </Grid>
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
}
