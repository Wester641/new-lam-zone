import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import styles from './Banner.module.scss';

import WidgetImg1 from '../../../assets/images/slider_images/sony.png';
// import WidgetImg2 from '../../../assets/images/widget2.png';

import DiffColor from '../../../assets/images/slider_images/Apple-iPhonediff-color.jpg';

import { Stack } from '@mui/material';

import SliderImage from '../slider_image/SliderImage';
import ButtonComponent from '../button/Button';

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
            <Box className={styles.boxContainer}>
              <div className={styles.container}>
                <span className={styles.divider}>Summer sales</span>
                <span className={styles.text}>
                  New iPhone <br /> 16 pro max
                </span>
                <ButtonComponent />
              </div>
              <div className={styles.img}>
                <img src={DiffColor} loading="lazy" alt="wgt" />
              </div>
            </Box>
            <Box className={styles.boxContainer}>
              <div className={styles.container}>
                <span className={styles.text}>
                  Sony Headphones <br /> Ultra 21
                </span>
                <span className={styles.price}>$250</span>
                <ButtonComponent />
              </div>
              <div className={styles.img}>
                <img
                  src={WidgetImg1}
                  loading="lazy"
                  alt="wgt"
                  className={styles.widgetImage}
                />
              </div>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </>
  );
}
