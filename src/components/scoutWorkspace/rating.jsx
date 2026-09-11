import React from "react";
import StarIcon from "./starIcon";

const Rating = ({ clubRating }) => {
  const stars = [1, 2, 3, 4, 5];
  const getStarType = (starIndex, value) => {
    if (starIndex <= value) return "full";
    if (starIndex - value < 1) return "half";
    return "empty";
  };
  return (
    <div className="flex items-center gap-1">
      {stars.map((starIndex) => {
        const type = getStarType(starIndex, clubRating);
        return <StarIcon key={starIndex} type={type} />;
      })}
    </div>
  );
};

export default Rating;
