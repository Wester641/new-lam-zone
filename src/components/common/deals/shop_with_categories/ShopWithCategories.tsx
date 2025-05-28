import { Box } from '@mui/material';
import styles from './ShopWithCategories.module.scss';
import Slider from 'react-slick';
import iphone from '../../../../assets/images/slider_images/bgiphone.png';
import mac from '../../../../assets/images/slider_images/mac.png';
import comp from '../../../../assets/images/categories_images/comp.png';
import headphone from '../../../../assets/images/categories_images/headphone.png';
import keyboard from '../../../../assets/images/categories_images/keyboard.png';

const categories = [
  {
    image: comp,
    title: 'Computer & Laptop',
  },
  {
    image: iphone,
    title: 'SmartPhone',
  },
  {
    image: headphone,
    title: 'Headphones',
  },
  {
    image: keyboard,
    title: 'Accessories',
  },

  {
    image: mac,
    title: 'TV & Homes',
  },
];

export default function ShopWithCategories() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    centerMode: true,
    centerPadding: '0px',
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Box className={styles.shopWithCategories}>
      <h2>Shop with Categories</h2>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <Box className={styles.container}>
            <Box key={index} className={styles.containerItems}>
              <img src={category.image} loading="lazy" alt={category.title} />
              <p>{category.title}</p>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}
