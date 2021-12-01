import React,{ useState } from 'react';
import Slider from 'react-slick';

// components
import PictureCarouselCard from "../PictureCarouselCard";
import { NextArrow, PrevArrow } from '../CarouselArrow';

function NightLifeCarousel() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    
      const [nightLife] = useState([
        {
          image:
            "https://b.zmtcdn.com/data/collections/9a3e5fb300b74eb5a3b22f8a328fcb99_1530849038.jpg?output-format=webp",
          title: "Beer in a Bar",
          places: "150 Places",
        },
        {
          image:
            "https://b.zmtcdn.com/data/collections/9a3e5fb300b74eb5a3b22f8a328fcb99_1530849038.jpg?output-format=webp",
          title: "Beer in a Bar",
          places: "150 Places",
        },
        {
          image:
            "https://b.zmtcdn.com/data/collections/9a3e5fb300b74eb5a3b22f8a328fcb99_1530849038.jpg?output-format=webp",
          title: "Beer in a Bar",
          places: "150 Places",
        },
        {
          image:
            "https://b.zmtcdn.com/data/collections/9a3e5fb300b74eb5a3b22f8a328fcb99_1530849038.jpg?output-format=webp",
          title: "Beer in a Bar",
          places: "150 Places",
        },
        {
          image:
            "https://b.zmtcdn.com/data/collections/9a3e5fb300b74eb5a3b22f8a328fcb99_1530849038.jpg?output-format=webp",
          title: "Beer in a Bar",
          places: "150 Places",
        },
        {
          image:
            "https://b.zmtcdn.com/data/collections/9a3e5fb300b74eb5a3b22f8a328fcb99_1530849038.jpg?output-format=webp",
          title: "Beer in a Bar",
          places: "150 Places",
        },
      ]);
    
      return (
        <div className="w-full">
          <Slider {...settings}>
            {nightLife.map((nightLife, index) => (
              <PictureCarouselCard {...nightLife} key={index} />
            ))}
          </Slider>
        </div>
      );
    }

export default NightLifeCarousel;
