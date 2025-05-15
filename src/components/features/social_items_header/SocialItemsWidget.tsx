import Box from '@mui/material/Box';
import styles from './SocialItemsWidget.module.scss';
import { Container, Grid } from '@mui/material';
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
      <Container maxWidth="lg">
        <Grid container>
          <Grid size={{ xs: 12, sm: 12, md: 6 }} className={styles.gridItem}>
            <span>Welcome to L&M zone online store, enjoy your drive. </span>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 6 }} className={styles.gridItem}>
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
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
