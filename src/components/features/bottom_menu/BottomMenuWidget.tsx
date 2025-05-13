import Box from '@mui/material/Box';
import styles from './BottomMenuWidget.module.scss';
import { Container } from '@mui/material';
import SelectedMenu from '../../common/select/SelectedMenu';
import HeadsetIcon from '@mui/icons-material/Headset';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import PinDropIcon from '@mui/icons-material/PinDrop';
import ErrorIcon from '@mui/icons-material/Error';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

export default function BottomMenuWidget() {
  return (
    <Box className={styles.bottomMenuWidget}>
      <Container maxWidth="lg" className={styles.container}>
        <SelectedMenu />
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

        <Box className={styles.boxContainer}>
          <PhoneInTalkIcon />
          <span className={styles.callUsNow}>+996 500 37 00 02</span>
        </Box>
      </Container>
    </Box>
  );
}
