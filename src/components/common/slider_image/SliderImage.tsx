import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Grid } from '@mui/material';
import styles from './SliderImage.module.scss';
import ButtonComponent from '../button/Button';

import mac from '../../../assets/images/slider_images/mac.png';
import iphone from '../../../assets/images/slider_images/bgiphone.png';
import ps5 from '../../../assets/images/slider_images/ps5.jpg';

const images = [
  {
    image: ps5,
    name: 'PlayStation 5',
    title: '- Experience the Future of Gaming Like Never Before',
    description:
      'Dive into ultra-realistic graphics, lightning-fast load times, and immersive gameplay. Upgrade now and unlock a new level of gaming with exclusive deals for a limited time!',
  },
  {
    image: iphone,
    name: 'iPhone 16 Pro Max',
    title: '- Power in Your Hands, Elegance in Every Detail',
    description:
      'Capture life with a professional-grade camera, experience seamless performance with the A18 chip, and stay ahead with next-gen features.',
  },
  {
    image: mac,
    name: 'Macbook Pro 14',
    title: '- Next-Level Performance in a Featherlight Design',
    description:
      'Whether you’re working, creating, or relaxing — the new Macbook Pro delivers silent power, stunning Retina display, and all-day battery life.',
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
