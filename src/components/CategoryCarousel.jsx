import React from "react";
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CategoryCarousel({ categories }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear"
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category.id}>
            <Link to={`/category/${category.id}`} style={{ textDecoration: 'none', textAlign: 'center',color: 'inherit' }}>
              <img 
                src={`/images/category/${category.image}`} 
                alt={category.name} 
                style={{ width: '100%', height: '200px', objectFit: 'cover' ,  }}
              />
              <h3>{category.name}</h3>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CategoryCarousel;