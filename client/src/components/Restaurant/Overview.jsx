import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import ReactStars from "react-rating-stars-component";

// components
import { NextArrow, PrevArrow } from "../CarouselArrow";
import MenuCollection from "./MenuCollection";
import MenuSimilarRestaurantCard from "./MenuSimilarRestaurantCard";
import ReviewCard from "./Reviews/ReviewCard";

function Overview() {
  const [menuImages, setMenuImages] = useState({
    images: [
      "https://b.zmtcdn.com/data/menus/506/19119506/2d28e4999d61f37c8a19e852284abfbf.jpg",
      "https://b.zmtcdn.com/data/menus/506/19119506/57f429b03c18238a20e583aaaf247834.jpg",
      "https://b.zmtcdn.com/data/menus/506/19119506/5deb7f5c08dd9c554fe86d4e2fa0a782.jpg",
    ],
  });
  const [reviews, setReviews] = useState([
    {
      isRestaurantReview: false,
      createAt: "2020-05-01",
      fullName: "John Doe",
      reviewText: "Food was good, but service was slow",
    },
    {
      isRestaurantReview: false,
      createAt: "2020-09-01",
      fullName: "John Doe",
      reviewText: "Food was good, but service was slow",
    },
    {
      isRestaurantReview: false,
      createAt: "2021-05-01",
      fullName: "John Doe",
      reviewText: "Food was good, but service was slow",
    },
  ]);
  const [cuisine, setCuisine] = useState(["Modern Indian", "Bar Food"]);
  const averageCost = 200;

  const { id } = useParams();

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  //   "1234324234.343,23414324214.243"
  //   mapAddress?.split(",")   // ["1234324234.343", "23414324214.243"]
  //   map((item) => parseFloat(item)); // [1234324234.343, 23414324214.243]
  const getLatLong = (mapAddress) => {
    return mapAddress?.split(",").map((item) => parseFloat(item));
  };

  return (
    <>
      <div className="flex flex-col gap-5 md:flex-row relative">
        <div className="w-full md:w-8/12">
          <h2 className="font-semibold text-lg md:text-xl my-4">
            About this place
          </h2>
          <div className="flex justify-between items-center">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to={`/restaurant/${id}/menu`}>
              <span className="flex items-center gap-1 text-zomato-400">
                See all menu <IoMdArrowDropright />
              </span>
            </Link>
          </div>
          <div className="flex flex-wrap gap-3 my-4">
            <MenuCollection
              menuTitle="Menu"
              pages="3"
              image={menuImages.images}
            />
          </div>
          <h4 className="text-lg font-medium my-4">Cuisines</h4>
          <div className="flex flex-wrap gap-2">
            {cuisine.map((cuisineName, index) => (
              <span
                key={index}
                className="border border-gray-600 text-blue-600 px-2 py-1 rounded-full"
              >
                {cuisineName}
              </span>
            ))}
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>${averageCost} for one order (approx.)</h6>
            <small className="text-gray-500">
              Exclusive of applicable taxes and cahrges, if any
            </small>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">Similar Restaurants</h4>
            <div>
              <Slider {...settings}>
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg"
                  title="tea"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg"
                  title="tea"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg"
                  title="tea"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg"
                  title="tea"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg"
                  title="tea"
                />
                <MenuSimilarRestaurantCard
                  image="https://b.zmtcdn.com/data/pictures/chains/3/307893/69f1fa33c357f755f7021b7e35d59380.jpg"
                  title="tea"
                />
              </Slider>
            </div>
          </div>
          <div className="my-4">
            <h4 className="text-lg font-medium">
              Rate your delivery experience
            </h4>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            {reviews.map((review, index) => (
              <ReviewCard {...review} key={index} />
            ))}
          </div>
          <div className="my-4 w-full md:hidden flex flex-col gap-4">
            ...Map Stuff
          </div>
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex md:w-4/12 sticky rounded-xl top-10 bg-white p-3 shadow-md flex-col gap-4"
        >
          ...Map Stuff
        </aside>
      </div>
    </>
  );
}

export default Overview;