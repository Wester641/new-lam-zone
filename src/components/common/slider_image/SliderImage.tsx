import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderImage.module.scss';

import image1 from '../../../assets/images/Image.png';
import image2 from '../../../assets/images/Image1.png';
import image3 from '../../../assets/images/Image2.png';
import ButtonComponent from '../button/Button';
import { Grid } from '@mui/material';
// import image4 from '../../../assets/images/Image3.png';

const images = [
  {
    image: image1,
    name: 'Xbox Consoles',
    title: '- THE BEST PLACE TO PLAY',
    description:
      'Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.',
  },
  {
    image: image2,
    name: 'iPhone 16 Pro Max',
    title: '- THE BEST PLACE TO PLAY',
    description:
      'Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.',
  },
  {
    image: image3,
    name: 'LG OLED 4K',
    title: '- THE BEST PLACE TO PLAY',
    description:
      'Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for $2 USD.',
  },
];

export default function SliderImage() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        {images.map((banner, index) => (
          <Grid container key={index} className={styles.slide}>
            <Grid size={{ xs: 12, sm: 12, md: 6 }} className={styles.gridItems}>
              <span className={styles.title}>{banner.title}</span>
              <h2 className={styles.name}>{banner.name}</h2>
              <span className={styles.description}>{banner.description}</span>
              <ButtonComponent />
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 6 }} className={styles.gridItems}>
              <img src={banner.image} loading="lazy" alt="" />
            </Grid>
          </Grid>
        ))}
      </Slider>
    </div>
  );
}
