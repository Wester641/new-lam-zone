import Box from '@mui/material/Box';
import styles from './SocialItemsWidget.module.scss';
import { Container } from '@mui/material';
import {
  Facebook,
  Instagram,
  Telegram,
  WhatsApp,
  YouTube,
} from '@mui/icons-material';

export default function SocialItemsWidget() {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.socialItemsWidget}>
      <Container maxWidth="lg" className={styles.container}>
        <Box className={styles.boxText}>
          <span>Welcome to L&M zone online store, enjoy your drive. </span>
        </Box>
        <Box className={styles.boxText}>
          <div>
            <span>Follow Us:</span>
          </div>
          <div className={styles.social}>
            <Telegram></Telegram>
            <WhatsApp></WhatsApp>
            <Instagram></Instagram>
            <Facebook></Facebook>
            <YouTube></YouTube>
          </div>
        </Box>
      </Container>
    </Box>
  );
}
