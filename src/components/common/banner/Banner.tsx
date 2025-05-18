import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styles from './Banner.module.scss';

import WidgetImg1 from '../../../assets/images/widget1.png';
import WidgetImg2 from '../../../assets/images/widget2.png';
import { Stack } from '@mui/material';

import SliderImage from '../slider_image/SliderImage';

export default function Banner() {
  return (
    <>
      <Grid container spacing={1} sx={{ backgroundColor: '#F2F4F5' }}>
        <Grid size={{ xs: 12, sm: 12, md: 8 }} className={styles.gridItem}>
          <Box className={styles.bannerImg}>
            <SliderImage />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, sm: 12, md: 4 }} className={styles.gridItem}>
          <Stack spacing={1}>
            <img src={WidgetImg1} loading="lazy" alt="wgt" />
            <img src={WidgetImg2} loading="lazy" alt="wgt" />
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
