import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { AiOutlinePlus } from "react-icons/ai";

function FoodItem(props) {
    return <>
      <div className="flex items-start gap-2">
        {props?.name && (
          <div className="flex items-start gap-4 w-full p-1">
            {props?.image && (
              <div className="w-3/2 h-24 w-24 md:h-28 md:w-28 lg:h-36 lg:w-36 rounded-md overflow-hidden">
                <img
                  src={props?.image}
                  alt="food item"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            )}
            <div className="w-3/4 md:w-7/12 flex flex-col gap-1">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{props?.name}</h3>
                <button className="md:hidden flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1 rounded-lg">
                  {props.isAddedToCart ? (
                    "Added"
                  ) : (
                    <>
                      <AiOutlinePlus /> Add
                    </>
                  )}
                </button>
              </div>
              <ReactStars count={5} value={props?.rating} />
              <h5>${props?.price}</h5>
              <p>{props?.description}</p>
            </div>
            <div className="hidden md:block w-2/12">
              <button className="flex items-center gap-2 text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1 rounded-lg">
                {props.isAddedToCart ? (
                  "Added"
                ) : (
                  <>
                    <AiOutlinePlus /> Add
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </>
}

export default FoodItem;
