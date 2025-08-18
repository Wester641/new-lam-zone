import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import styles from "./FrequentlyAskedQuestions.module.scss";
import { Box, Container } from "@mui/material";

export default function FrequentlyAskedQuestions() {
  const faqList = [
    {
      text1: "Fusce molestie condimentum facilisis.",
      text2:
        " 111 Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.",
      text3: "Vivamus sed est non arcu porta aliquet et vitae nulla.",
      text4:
        "Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.",
      text5: "Proin blandit nunc risus, at semper turpis sagittis nec.",
      text6: "Quisque ut dolor erat.",
    },

    {
      text1: "Suspendisse ultrices pharetra libero sed interdum.",
      text2:
        " 222 Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.",
      text3: "Vivamus sed est non arcu porta aliquet et vitae nulla.",
      text4:
        "Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.",
      text5: "Proin blandit nunc risus, at semper turpis sagittis nec.",
      text6: "Quisque ut dolor erat.",
    },

    {
      text1: "Quisque quis nunc quis urna tempor lobortis vel non orci. ",
      text2:
        " 333 Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.",
      text3: "Vivamus sed est non arcu porta aliquet et vitae nulla.",
      text4:
        "Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.",
      text5: "Proin blandit nunc risus, at semper turpis sagittis nec.",
      text6: "Quisque ut dolor erat.",
    },
    {
      text1:
        "Donec rutrum ultrices ante nec malesuada. In accumsan eget nisi a rhoncus.",
      text2:
        " 444 Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.",
      text3: "Vivamus sed est non arcu porta aliquet et vitae nulla.",
      text4:
        "Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.",
      text5: "Proin blandit nunc risus, at semper turpis sagittis nec.",
      text6: "Quisque ut dolor erat.",
    },

    {
      text1: "Nulla sed sapien maximus, faucibus massa vitae.",
      text2:
        " 555  Nulla malesuada iaculis nisi, vitae sagittis lacus laoreet in. Morbi aliquet pulvinar orci non vulputate. Donec aliquet ullamcorper gravida. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed molestie accumsan dui, non iaculis magna mattis id. Ut consectetur massa at viverra euismod. Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent eget sem purus.",
      text3: "Vivamus sed est non arcu porta aliquet et vitae nulla.",
      text4:
        "Integer et lacus vitae justo fermentum rutrum. In nec ultrices massa.",
      text5: "Proin blandit nunc risus, at semper turpis sagittis nec.",
      text6: "Quisque ut dolor erat.",
    },
  ];
  return (
    <Box className={styles.FrequentlyAskedQuestions}>
      <Container className={styles.FrequentlyAskedQuestions_container}>
        <h1 className={styles.FrequentlyAskedQuestions_h1}>
          Frequently Asked Questions
        </h1>
        {faqList.map((faqList, index) => (
          <Accordion
            className={styles.FrequentlyAskedQuestions_block}
            key={index}
          >
            <AccordionSummary
              sx={{
                "&:hover": {
                  background: "#FA8232",
                  color: "#fff",
                  "& .MuiSvgIcon-root": {
                    color: "#fff",
                  },
                },
              }}
              expandIcon={<ExpandMoreIcon />}
            >
              <p className={styles.FrequentlyAskedQuestions_block_text1}>
                {faqList.text1}
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className={styles.FrequentlyAskedQuestions_block_text2}>
                {faqList.text2}
              </p>
              <ul>
                <li className={styles.FrequentlyAskedQuestions_block_text2}>
                  {faqList.text3}
                </li>
                <li className={styles.FrequentlyAskedQuestions_block_text2}>
                  {faqList.text4}
                </li>
                <li className={styles.FrequentlyAskedQuestions_block_text2}>
                  {faqList.text5}
                </li>
                <li className={styles.FrequentlyAskedQuestions_block_text2}>
                  {faqList.text6}
                </li>
              </ul>
            </AccordionDetails>
          </Accordion>
        ))}
      </Container>
    </Box>
  );
}
