import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import styles from './SupportWidget.module.scss';
import { Container, Stack } from '@mui/material';

import CreditCard from '../../../assets/images/support_icons/CreditCard.png';
import Headphones from '../../../assets/images/support_icons/Headphones.png';
import Package from '../../../assets/images/support_icons/Package.png';
import Trophy from '../../../assets/images/support_icons/Trophy.png';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'start',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
  boxShadow: 'none',
}));

const supportContent = [
  {
    id: 1,
    image: Package,
    title: 'Fasted Delivery',
    description: 'Delivery in 24/H',
  },
  {
    id: 2,
    image: Trophy,
    title: '24 Hours Return',
    description: '100% money-back guarantee',
  },
  {
    id: 3,
    image: Headphones,
    title: 'Secure Payment',
    description: 'Your money is safe',
  },
  {
    id: 4,
    image: CreditCard,
    title: 'Support 24/7',
    description: 'Live contact/message',
  },
];

export default function SupportWidget() {
  return (
    <Box sx={{ width: '100%' }}>
      <Container maxWidth="lg" className={styles.supportWidget}>
        <Grid
          container
          spacing={0}
          columns={16}
          className={styles.supportContainer}
        >
          {supportContent.map((item, index) => (
            <Grid size={{ xs: 12, sm: 12, md: 4 }} key={item.id}>
              <Grid container spacing={2} className={styles.supportItem}>
                <Grid className={styles.supportImg} size={3}>
                  <Item>
                    <img
                      src={item.image}
                      alt="wgt"
                      className={styles.supportImg}
                    />
                  </Item>
                </Grid>
                <Grid
                  size={9}
                  className={
                    index === 3
                      ? styles.supportContentNoBorder
                      : styles.supportContent
                  }
                >
                  <Stack spacing={2}>
                    <h3 className={styles.supportTitle}>{item.title}</h3>
                    <p className={styles.supportDescription}>
                      {item.description}
                    </p>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
