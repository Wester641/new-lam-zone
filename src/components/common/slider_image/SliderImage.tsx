import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderImage.module.scss';

import image1 from '../../../assets/images/slider_images/1.png';
import image2 from '../../../assets/images/slider_images/2.png';
import image3 from '../../../assets/images/slider_images/3.png';
import image4 from '../../../assets/images/slider_images/4.png';

const images = [image1, image2, image3, image4];

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
        {images.map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
