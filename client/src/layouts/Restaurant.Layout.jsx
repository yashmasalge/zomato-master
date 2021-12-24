import React, {useState, useEffect } from 'react';
import { TiStarOutline } from 'react-icons/ti';
import { RiDirectionLine, RiShareForward2Line} from 'react-icons/ri';
import { BiBookmarkPlus} from 'react-icons/bi'
import { useParams } from "react-router-dom";

// Redux
import { useDispatch } from "react-redux";
import { getSpecificRestaurant } from "../redux/reducers/restaurant/restaurant.action";
import { getImage } from "../redux/reducers/image/image.action";

// Components
import Navbar from '../components/Navbar';
import ImageGrid from '../components/Restaurant/ImageGrid';
import InfoButton from '../components/Restaurant/InfoButton';
import RestaurantInfo from '../components/Restaurant/RestaurantInfo';
import Tabs from '../components/Restaurant/Tabs';
import CartContainer from '../components/Cart/CartContainer';

function RestaurantLayout({children}) {

    const [restaurant ,setRestaurant] = useState({
        images: [],
          name: "",
          cuisine: "",
          address: "",
          restaurantRating: 4.1,
          deliveryRating: 3.2,
    });
    
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getSpecificRestaurant(id)).then((data) => {
          setRestaurant((prev) => ({
            ...prev,
            ...data.payload.restaurant,
          }));
    
          dispatch(getImage(data.payload.restaurant.photos)).then((data) => {
            console.log(data);
            setRestaurant((prev) => ({
              ...prev,
              images: data.payload.images,
            }));
          });
        });
      }, []);

    return <>
        <Navbar />
        <div className="container mx-auto px-4 lg:px-20 pb-20">
         <ImageGrid images={restaurant.images} />   
         <RestaurantInfo
          name={restaurant?.name}
          restaurantRating={restaurant?.restaurantRating || 0}
          deliveryRating={restaurant?.deliveryRating || 0}
          cuisine={restaurant?.cuisine}
          address={restaurant?.address}
        />
        <div className='my-4 flex flex-wrap gap-3 mx-auto'>
            <InfoButton isActive>
                <TiStarOutline /> Add Review
            </InfoButton>
            <InfoButton >
                <RiDirectionLine /> Direction
            </InfoButton>
            <InfoButton>
                <BiBookmarkPlus /> Bookmark
            </InfoButton>
            <InfoButton>
                <RiShareForward2Line /> Share
            </InfoButton>
        </div>
        <div className='my-10'>
        <Tabs />
        </div>
        {children}
        </div>
        <CartContainer />
    </>
}

export default RestaurantLayout;
