import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Container, Grid, IconButton, Toolbar } from '@mui/material';
import styles from './HeaderComponent.module.scss';
import { MobileNavigation } from './mobile/MobileNavigation';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function HeaderComponent() {
  return (
    <Box className={styles.firstMainTag}>
      <AppBar position="static" className={styles.secondMainTag}>
        <Toolbar>
          <Container maxWidth="lg" className={styles.container}>
            <Grid container spacing={2} alignItems="center">
              <Grid
                size={{ xs: 3.5, sm: 3.5, md: 4 }}
                className={styles.gridItem}
              >
                LOGO
              </Grid>
              <Grid
                size={{ xs: 3.5, sm: 3.5, md: 4 }}
                className={styles.gridItem}
              >
                asd
              </Grid>
              <Grid
                size={{ xs: 3.5, sm: 3.5, md: 4 }}
                className={styles.gridItem}
              >
                <IconButton color="inherit">
                  <FavoriteBorderIcon />
                </IconButton>
                <IconButton color="inherit">
                  <ShoppingCartIcon />
                </IconButton>
                <IconButton color="inherit">
                  <AccountCircleIcon />
                </IconButton>
              </Grid>
              <Grid
                sx={{ display: { xs: 'block', md: 'none' } }}
                size={{ xs: 1.5, sm: 1.5, md: 1.5 }}
                className={styles.gridItem}
              >
                <MobileNavigation />
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
