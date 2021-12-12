import React, { useState } from "react";

// components
import ReviewCard from "./ReviewCard";
import AddReviewCard from "./AddReviewCard";

function Reviews() {
  const [reviews, setReviews] = useState([
    {
      fullName: "John Doe",
      isRestaurantReview: true,
      createdAt: "2020-05-01T00:00:00.000Z",
      reviewText: "This place is great!",
    },
  ]);

  return <>
      <div className="w-full h-full flex-col md:flex md:flex-row relative gap-5">
        <div className="w-full md:w-8/12 flex flex-col gap-3">
          <div className="md:hidden mb-4">
            <AddReviewCard />
          </div>
          {reviews.map((review) => (
            <ReviewCard {...review} />
          ))}
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex items-start md:w-4/12 sticky rounded-xl top-2 bg-white p-4 shadow-md flex-col gap-3"
        >
          <AddReviewCard />
        </aside>
      </div>
    </>
}

export default Reviews;