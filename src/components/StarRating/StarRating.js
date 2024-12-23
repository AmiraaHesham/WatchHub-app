import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const StarRating = ({ rating, maxRating = (10) }) => {

    const stars = (rating / maxRating) * 5;

    const fullStars = Math.floor(stars);
    const halfStar = stars % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    return (
        <div style={{ display: "flex", alignItems: "center" }}>

            {Array(fullStars)
                .fill()
                .map((_, index) => (
                    <FaStar key={`full-${index}`} style={{ color: "#748ea3", fontSize: "30px" }} />
                ))}


            {halfStar === 1 && (
                <FaStarHalfAlt style={{ color: "#748ea3", fontSize: "30px" }} />
            )}


            {Array(emptyStars)
                .fill()
                .map((_, index) => (
                    <FaRegStar key={`empty-${index}`} style={{ color: "#748ea3", fontSize: "30px" }} />
                ))}
        </div>
    );
}

export default StarRating
