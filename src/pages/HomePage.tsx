import Banner from '../components/common/banner/Banner';
import SupportWidget from '../components/features/support_widget/SupportWidget';
import FooterLayout from '../components/layout/footer/FooterLayout';
import HeaderLayout from '../components/layout/header/HeaderLayout';

function HomePage() {
  return (
    <>
      <HeaderLayout />
      <Banner />
      <SupportWidget />
      <Banner />

      <FooterLayout />
    </>
  );
}

export default HomePage;
