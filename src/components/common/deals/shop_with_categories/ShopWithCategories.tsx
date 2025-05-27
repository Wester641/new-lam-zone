import { Box } from '@mui/material';
import styles from './ShopWithCategories.module.scss';
import Slider from 'react-slick';
import computer from '../../../../assets/images/slider_images/Image.png';
import iphone from '../../../../assets/images/slider_images/bgiphone.png';
import mac from '../../../../assets/images/slider_images/mac.png';

const categories = [
  {
    image: computer,
    title: 'Computers & Laptops',
  },
  {
    image: iphone,
    title: 'Computers & Laptops',
  },
  {
    image: mac,
    title: 'Computers & Laptops',
  },
  {
    image: iphone,
    title: 'Computers & Laptops',
  },
  {
    image: mac,
    title: 'Computers & Laptops',
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
    breakPoints: [
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
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
