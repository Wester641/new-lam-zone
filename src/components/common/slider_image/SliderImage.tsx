import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './SliderImage.module.scss';

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
        {[1, 2, 3, 4, 5, 6].map(num => (
          <div key={num} className={styles.slide}>
            <h3>{num}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}
