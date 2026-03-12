import styles from "./FAQsPage.module.scss";
import Footer from "../../components/layout/footer/FooterLayout";
import Header from "../../components/layout/header/HeaderLayout";
import FrequentlyAskedQuestions from "../../components/common/frequently_asked_questions/FrequentlyAskedQuestions";
import { Box, Container, Grid } from "@mui/material";
import AskForSupport from "../../components/common/ask_for_support/AskForSupport";

export default function FAQsPage() {
  return (
    <Box className={styles.FAQsPage}>
      <Header />
      <Container className={styles.FAQsPage_Container}>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, md: 7 }}>
            <FrequentlyAskedQuestions />
          </Grid>
          <Grid size={{ xs: 12, md: 5 }}>
            <AskForSupport />
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
}
