import { Box, Container } from '@mui/material';
import FooterLayout from '../../components/layout/footer/FooterLayout';
import HeaderLayout from '../../components/layout/header/HeaderLayout';
import styles from './TermsOfServicePage.module.scss';
import { MobileBottomNavigation } from '../../components/common/header_components/mobile_navigation/MobileBottomNavigation';
import TermsOfservice from '../../components/common/terms_of_service/TermsOfservice';

function TermsOfServicePage() {
  return (
    <Box className={styles.homePage}>
      <HeaderLayout />
      <MobileBottomNavigation />
      <Container className={styles.grid}>
        <TermsOfservice />
      </Container>
      <FooterLayout />
    </Box>
  );
}

export default TermsOfServicePage;
