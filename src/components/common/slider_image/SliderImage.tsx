import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderImage.module.scss';

import image1 from '../../../assets/images/Image.png';
import image2 from '../../../assets/images/Image1.png';
import image3 from '../../../assets/images/Image2.png';
// import image4 from '../../../assets/images/Image3.png';

const images = [
  {
    image: image1,
    title: 'Macbook Air 13 256 M1 Midnight 3',
  },
  {
    image: image2,
    title: 'Macbook Air 13 256 M2 Midnight 5',
  },
  {
    image: image3,
    title: 'Macbook Air 13 256 M3 Midnight 7',
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
          <div key={index} className={styles.slide}>
            <div>{banner.title}</div>
            <div>
              <img src={banner.image} loading="lazy" alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
