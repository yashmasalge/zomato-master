import React, {useState} from 'react';
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import FloatMenuBtn from "./Order-Online/FloatMenuBtn";
import FoodList from "./Order-Online/FoodList";
import MenuListContainer from "./Order-Online/MenuListContainer";

function OrderOnline() {
    const [menu, setMenu] = useState([
        {
          name: "Recommended",
          items: [
            {
              name: "Dal Makhani",
              image:
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg",
              isAddedToCart: false,
              rating: 4,
              description: "Whole black lentils cooked overnight . ",
              price: "333",
            },
            {
              name: "Murg Rara Boneless (6 pieces)",
              image:
                "https://b.zmtcdn.com/data/dish_photos/12e/96f768852181de77ff1b4b822866b12e.jpg",
              isAddedToCart: true,
              rating: 4,
              description: "Whole black lentils cooked overnight . ",
              price: "320",
            },
            {
              name: "Veg Executive Thali",
              image:
                "https://b.zmtcdn.com/data/dish_photos/d2d/4e08401c19c04212ca3a4aed3355dd2d.jpg",
              isAddedToCart: false,
              rating: 4,
              description: "Whole black lentils cooked overnight . ",
              price: "345",
            },
            {
              name: "Dal Makhani",
              image:
                "https://b.zmtcdn.com/data/dish_photos/e70/5e7413385f2c359c1148aea11a71fe70.jpg",
              isAddedToCart: false,
              rating: 4,
              description: "Whole black lentils cooked overnight . ",
              price: "333",
            },
          ],
        },
        {
          name: "Momos",
          items: [
            {
              name: "Veg Executive Thali",
              image:
                "https://b.zmtcdn.com/data/dish_photos/d2d/4e08401c19c04212ca3a4aed3355dd2d.jpg",
              isAddedToCart: false,
              rating: 4,
              description: "Whole black lentils cooked overnight . ",
              price: "345",
            },
            {
              name: "Dal Makhani",
              image:
                "https://b.zmtcdn.com/data/dish_photos/e70/5e7413385f2c359c1148aea11a71fe70.jpg",
              isAddedToCart: false,
              rating: 4,
              description: "Whole black lentils cooked overnight . ",
              price: "333",
            },
          ],
        },
        {
          name: "Chinese Starters",
          items: [
            {
              name: "Veg Executive Thali",
              image:
                "https://b.zmtcdn.com/data/dish_photos/d2d/4e08401c19c04212ca3a4aed3355dd2d.jpg",
              isAddedToCart: false,
              rating: 4,
              description: "Whole black lentils cooked overnight . ",
              price: "345",
            },
            {
              name: "Dal Makhani",
              image:
                "https://b.zmtcdn.com/data/dish_photos/e70/5e7413385f2c359c1148aea11a71fe70.jpg",
              isAddedToCart: false,
              rating: 4,
              description: "Whole black lentils cooked overnight . ",
              price: "333",
            },
          ],
        },
        {
          name: "Breads",
          items: [
            {
              name: "Veg Executive Thali",
              image:
                "https://b.zmtcdn.com/data/dish_photos/d2d/4e08401c19c04212ca3a4aed3355dd2d.jpg",
              isAddedToCart: false,
              rating: 4,
              description: "Whole black lentils cooked overnight . ",
              price: "345",
            },
            {
              name: "Dal Makhani",
              image:
                "https://b.zmtcdn.com/data/dish_photos/e70/5e7413385f2c359c1148aea11a71fe70.jpg",
              isAddedToCart: false,
              rating: 4,
              description: "Whole black lentils cooked overnight . ",
              price: "333",
            },
          ],
        },
        {
          name: "Rice and Biryani",
          items: [],
        },
        {
          name: "Rolls",
          items: [],
        },
      ]);
      const [selected, setSelected] = useState("Recommended");
    
      const onClickHandler = (e) => {
        if (e.target.id) {
          setSelected(e.target.id);
        }
        return;
      };
    return <>
        <div className="w-full h-screen flex">
        <aside className="hidden md:flex flex-col gap-1 border-r overflow-y-scroll border-gray-200 h-screen w-1/4">
          {menu.map((item, index) => (
            <MenuListContainer
              {...item}
              key={index}
              onClickHandler={onClickHandler}
              selected={selected}
            />
          ))}
        </aside>
        <div className="w-full px-3 md:w-3/4">
          <div className="pl-3 mb-4">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
            </h4>
          </div>
          <section className="flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
            {menu.map((item, index) => (
              <FoodList key={index} {...item} />
            ))}
          </section>
        </div>
      </div>
      <FloatMenuBtn
        menu={menu}
        onClickHandler={onClickHandler}
        selected={selected}
      />
    </>
}

export default OrderOnline
