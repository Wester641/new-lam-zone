import { Box, Link, Typography, Container, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Grid } from '@mui/material';
import logo from '../../../assets/icons/logo.png';
import styles from './FooterLayout.module.scss';
// Replace these with your own social media URLs
const socialMediaLinks = {
  facebook: '#',
  twitter: '#',
  instagram: '#',
};

const FooterLayout: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#191C1F',
        py: 3,
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="space-between">
          <Grid size={{ xs: 12, sm: 6, md: 3 }} className={styles.gridItem}>
            <img src={logo} alt="logo" />
          </Grid>
          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography variant="subtitle1" color="white" gutterBottom>
              PRODUCT
            </Typography>
            <Link
              sx={{ textDecoration: 'none' }}
              href="#"
              color="inherit"
              display="block"
            >
              Features
            </Link>
            <Link
              sx={{ textDecoration: 'none' }}
              href="#"
              color="inherit"
              display="block"
            >
              Integrations
            </Link>
            <Link
              sx={{ textDecoration: 'none' }}
              href="#"
              color="inherit"
              display="block"
            >
              Pricing
            </Link>
            <Link
              sx={{ textDecoration: 'none' }}
              href="#"
              color="inherit"
              display="block"
            >
              FAQ
            </Link>
          </Grid>
          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography variant="subtitle1" color="white" gutterBottom>
              COMPANY
            </Typography>
            <Link href="#" color="inherit" display="block">
              About Us
            </Link>
            <Link href="#" color="inherit" display="block">
              Careers
            </Link>
            <Link href="#" color="inherit" display="block">
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" display="block">
              Terms of Service
            </Link>
          </Grid>
          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography variant="subtitle1" color="white" gutterBottom>
              DEVELOPERS
            </Typography>
            <Link href="#" color="inherit" display="block">
              Public API
            </Link>
            <Link href="#" color="inherit" display="block">
              Documentation
            </Link>
            <Link href="#" color="inherit" display="block">
              Guides
            </Link>
          </Grid>
          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <Typography variant="subtitle1" color="white" gutterBottom>
              SOCIAL MEDIA
            </Typography>
            <IconButton
              aria-label="Facebook"
              color="inherit"
              component="a"
              href={socialMediaLinks.facebook}
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              color="inherit"
              component="a"
              href={socialMediaLinks.twitter}
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              aria-label="Instagram"
              color="inherit"
              component="a"
              href={socialMediaLinks.instagram}
            >
              <InstagramIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Typography variant="body2" color="white" align="center" sx={{ pt: 4 }}>
          (S02) Copyright © 2025 Powered by
          <a
            className={styles.footerLink}
            target="_blank"
            href="https://zafarzhon.vercel.app/"
          >
            {' '}
            Inctec Solutions Pte Ltd.
          </a>{' '}
          All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default FooterLayout;
