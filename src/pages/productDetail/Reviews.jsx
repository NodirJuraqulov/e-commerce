import React from "react";
import { Star } from "lucide-react";
import dayjs from "dayjs";

const ReviewCard = ({ review }) => {
  const { rating, comment, date, reviewerName } = review;

  return (
    <div className="rounded-2xl shadow-md bg-white p-4 flex flex-col gap-2">
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={
              i < rating
                ? "fill-yellow-400 stroke-yellow-400"
                : "stroke-gray-300"
            }
          />
        ))}
        <span className="ml-2 text-sm text-gray-500">
          {dayjs(date).format("DD MMM YYYY")}
        </span>
      </div>

      <p className="text-gray-800 font-medium leading-relaxed">{comment}</p>

      <span className="text-sm text-gray-600">— {reviewerName}</span>
    </div>
  );
};

const Reviews = ({ product }) => {
  const reviews = product?.reviews || [];

  return (
    <div className="flex flex-col items-center justify-center px-[105px]">
      <h3 className="text-2xl font-medium mb-5">Reviews</h3>

      {reviews.length ? (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {reviews.map((rev, idx) => (
            <ReviewCard key={idx} review={rev} />
          ))}
        </div>
      ) : (
        <p className="text-[16px] font-normal text-[#9F9F9F]">
          Hozircha sharhlar yo‘q.
        </p>
      )}
    </div>
  );
};

export default React.memo(Reviews);
