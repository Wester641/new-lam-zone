import Box from '@mui/material/Box';

import BlackFridayWidget from '../../features/black_friday/BlackFridayWidget';
import SocialItemsWidget from '../../features/social_items_header/SocialItemsWidget';
import BottomMenuWidget from '../../features/bottom_menu/BottomMenuWidget';
import HeaderComponent from '../../common/header_component/HeaderComponent';

export default function HeaderLayout() {
  return (
    <Box>
      <BlackFridayWidget />
      <SocialItemsWidget />
      <HeaderComponent />
      <BottomMenuWidget />
    </Box>
  );
}
