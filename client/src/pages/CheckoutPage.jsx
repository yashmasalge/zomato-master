import React from "react";
import { BsShieldLockFill } from "react-icons/bs";


// components
import FoodItem from "../components/Cart/FoodItem";
import AddressList from "../components/Checkout/AddressList";

function CheckoutPage() {
    const address = [
        {
          name: "Home",
          address: "123 Main St",
        },
        {
          name: "Work",
          address: "123 Main St",
        },
        {
          name: "Other",
          address: "123 Main St",
        },
      ];
    
      const foods = [
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/87c/153beb91af9f43e157f3d6fd6ea2587c.jpg?output-format=webp",
          name: "Chilli Paneer Gravy",
          price: "157.50",
          rating: 4,
          descript:
            "Chicken NoodelsChicken Fried Rice+Chilli ChickenChicken Manchurian+Chilli PotatoHoney Chilli Potato+Chicken Chilli Garlic Momos [2 ... read more",
          quantity: 1,
        },
        {
          image:
            "https://b.zmtcdn.com/data/dish_photos/87c/153beb91af9f43e157f3d6fd6ea2587c.jpg?output-format=webp",
          name: "Chilli Paan",
          price: "157.50",
          rating: 4,
          descript:
            "Chicken NoodelsChicken Fried Rice+Chilli ChickenChicken Manchurian+Chilli PotatoHoney Chilli Potato+Chicken Chilli Garlic Momos [2 ... read more",
          quantity: 3,
        },
      ];

     
    return <>
    <div className="my-3 flex flex-col gap-3 items-center">
      <h1 className="text-xl text-center md:text-2xl font-bold">Checkout</h1>
      <div className="w-full md:w-3/5 rounded-lg py-3 shadow-lg bg-white flex flex-col items-center">
        <h3 className="text-lg font-semibold">Summary</h3>
        <div className="flex w-full flex-col gap-2 items-center">
          <h5 className="text-base tracking-wider">ORDER FROM</h5>
          <div className="flex w-full flex-col items-center text-gray-400">
            <h4>Domino's Pizza</h4>
            <small>GT Woorld Mall, Magadi Road, NCR Noida</small>
          </div>
          <div className="my-4 h-32 overflow-y-scroll px-4 flex flex-col gap-2 w-full md:w-3/5">
            {foods.map((food) => (
              <FoodItem key={food._id} {...food} />
            ))}
          </div>
          <div className="flex flex-col gap-3 w-full md:w-3/5 items-center">
            <h4 className="text-xl font-semibold">Choose Address</h4>
            <AddressList address={address} />
          </div>
        </div>
        <button className="flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4 md:w-4/5 h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg">
          Pay Securely <BsShieldLockFill />
        </button>
      </div>
    </div>
    </>
}

export default CheckoutPage;
