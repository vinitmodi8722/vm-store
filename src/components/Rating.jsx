
import React from "react";
import PropTypes from "prop-types";

const Rating = ({ rating }) => {
  const roundedRating = Math.round(rating * 2) / 2;
  const numStars = 5;

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= numStars; i++) {
      if (i <= roundedRating) {
        stars.push(
          <span key={i} className="star filled">
            ★
          </span>
        );
      } else if (i - 0.5 <= roundedRating) {
        stars.push(
          <span key={i} className="star half-filled">
            ★
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="star">
            ★
          </span>
        );
      }
    }
    return stars;
  };

  return <div className="rating">{renderStars()}</div>;
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
