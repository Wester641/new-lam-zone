import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import HeaderLayout from '../../layout/header/HeaderLayout';
import FooterLayout from '../../layout/footer/FooterLayout';
import { MobileBottomNavigation } from '../header_components/mobile_navigation/MobileBottomNavigation';
import { useNavigate } from 'react-router-dom';

const UnderConstruction: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <HeaderLayout />
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        minHeight="80vh"
        textAlign="center"
        p={3}
      >
        <ConstructionIcon sx={{ fontSize: 80, color: 'orange' }} />
        <Typography variant="h4" gutterBottom>
          This page is under construction
        </Typography>
        <Typography variant="body1" color="text.secondary" mb={3}>
          We're working on this page.
        </Typography>
        <Button onClick={() => navigate('/')} variant="contained">
          Back to Home
        </Button>
      </Box>
      <MobileBottomNavigation />
      <FooterLayout />
    </Box>
  );
};

export default UnderConstruction;
