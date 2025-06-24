import Box from '@mui/material/Box';
import styles from './BottomMenuWidget.module.scss';
import { Container, Grid } from '@mui/material';
import SelectedMenu from '../../common/select/SelectedMenu';
import HeadsetIcon from '@mui/icons-material/Headset';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ErrorIcon from '@mui/icons-material/Error';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

export default function BottomMenuWidget() {
  return (
    <Box sx={{ flexGrow: 1 }} className={styles.bottomMenuWidget}>
      <Container maxWidth="lg" className={styles.container}>
        <Grid
          container
          spacing={{ xs: 0, sm: 0, md: 2 }}
          className={styles.grid}
        >
          <Grid className={styles.gridItems} size={{ sm: 0, md: 2 }}>
            <SelectedMenu />
          </Grid>
          <Grid className={styles.gridItems} size={{ xs: 12, sm: 12, md: 8 }}>
            <Box className={styles.boxContainer}>
              <div className={styles.box}>
                <PinDropIcon />
                <span>Track Order</span>
              </div>
              <div className={styles.box}>
                <CompareArrowsIcon />
                <span>Compare</span>
              </div>
              <div className={styles.box}>
                <HeadsetIcon />
                <span>Customer Support</span>
              </div>
              <div className={styles.box}>
                <ErrorIcon />
                <span>Need Help</span>
              </div>
            </Box>
          </Grid>
          <Grid className={styles.gridItems} size={{ md: 2 }}>
            <Box>
              <PhoneInTalkIcon />
              <span className={styles.callUsNow}>+996 500 37 00 02</span>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
