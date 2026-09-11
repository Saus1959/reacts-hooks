import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faStarSolid,
  faStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";

const StarIcon = ({ type }) => {
  const PossibleTypes = {
    full: faStarSolid,
    half: faStarHalf,
    empty: faStarEmpty,
  };
  return (
    <FontAwesomeIcon icon={PossibleTypes[type]} className="text-yellow-700" />
  );
};

export default StarIcon;
