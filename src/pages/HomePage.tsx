import Banner from '../components/common/banner/Banner';
import BlackFridayWidget from '../components/features/black_friday/BlackFridayWidget';
import BottomMenuWidget from '../components/features/bottom_menu/BottomMenuWidget';
import SocialItemsWidget from '../components/features/social_items_header/SocialItemsWidget';
import SupportWidget from '../components/features/support_widget/SupportWidget';
import FooterLayout from '../components/layout/footer/FooterLayout';
import HeaderLayout from '../components/layout/header/HeaderLayout';

function HomePage() {
  return (
    <>
      <BlackFridayWidget />
      <SocialItemsWidget />
      <HeaderLayout />
      <BottomMenuWidget />
      <Banner />
      <SupportWidget />
      <Banner />
      <FooterLayout />
    </>
  );
}

export default HomePage;
