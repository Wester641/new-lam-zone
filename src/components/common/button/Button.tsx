import { Button } from "@mui/material";
import styles from "./Button.module.scss";
import { ArrowForward } from "@mui/icons-material";

type ButtonComponentProps = {
  text?: string;
};

function ButtonComponent({ text = "Shop Now" }: ButtonComponentProps) {
  return (
    <Button variant="contained" href="/catalogue" className={styles.button}>
      <div>{text}</div>
      <ArrowForward />
    </Button>
  );
}

export default ButtonComponent;
