import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Container, Grid, Toolbar } from '@mui/material';
import styles from './HeaderComponent.module.scss';
import { MobileNavigation } from './mobile/MobileNavigation';
import IconButtons from './icon_buttons/IconButtons';
import logo from '../../../assets/icons/logo1.png';

export default function HeaderComponent() {
  return (
    <Box className={styles.firstMainTag}>
      <AppBar position="static" className={styles.secondMainTag}>
        <Toolbar>
          <Container maxWidth="lg" className={styles.container}>
            <Grid container alignItems="center">
              <Grid size={{ xs: 4, sm: 5, md: 6 }} className={styles.gridItem}>
                <img src={logo} alt="logo" />
              </Grid>
              <Grid
                sx={{ display: { xs: 'block', md: 'none' } }}
                size={{ xs: 4, sm: 1 }}
                className={styles.gridItem}
                order={-1}
              >
                <MobileNavigation />
              </Grid>
              <Grid size={{ xs: 4, sm: 6, md: 6 }} className={styles.gridItem}>
                <IconButtons />
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
