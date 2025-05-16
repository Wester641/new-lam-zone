import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import styles from './Banner.module.scss';

import WidgetImg from '../../../assets/images/Widget.png';
import WidgetImg1 from '../../../assets/images/widget1.png';
import WidgetImg2 from '../../../assets/images/widget2.png';
import { Container, Stack } from '@mui/material';

export default function Banner() {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
  }));

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Container maxWidth="lg" className={styles.bannerImg}>
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, sm: 12, md: 8 }}>
              <Item>
                <img src={WidgetImg} alt="wgt" />
              </Item>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 4 }}>
              <Stack spacing={2}>
                <Item>
                  <img src={WidgetImg1} alt="wgt" />
                </Item>
                <Item>
                  <img src={WidgetImg2} alt="wgt" />
                </Item>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
