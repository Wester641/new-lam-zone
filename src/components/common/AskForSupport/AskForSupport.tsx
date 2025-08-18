import { Box, TextField } from "@mui/material";
import ButtonComponent from "../button/Button";
import styles from "./AskForSupport.module.scss";

export default function AskForSupport() {
  return (
    <Box className={styles.AskForSupport}>
      <h1 className={styles.AskForSupport_h1}>
        Don’t find your answer, Ask for support.
      </h1>
      <p className={styles.AskForSupport_p}>
        Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed
        molestie accumsan dui, non iaculis primis in faucibu raesent eget sem
        purus.
      </p>

      <div className={styles.AskForSupport_container}>
        <input
          className={styles.AskForSupport_container_input}
          type="text"
          placeholder="Email address"
        />
        <input
          className={styles.AskForSupport_container_input}
          type="text"
          placeholder="Subject"
        />
        <TextField
          className={styles.AskForSupport_container_inputMessag}
          placeholder="Message (Optional)"
          variant="standard"
          InputProps={{ disableUnderline: true }}
        />
        <ButtonComponent text="Send message" />
      </div>
    </Box>
  );
}
