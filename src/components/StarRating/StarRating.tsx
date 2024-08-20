// StarRating.tsx
import React, { useState } from 'react';
import './StarRating.scss';

interface StarRatingProps {
    initialRating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ initialRating }) => {
    const [rating, setRating] = useState(initialRating);

    const handleStarClick = (index: number) => {
        setRating(index);
    };

    return (
        <div className="star-rating">
        {Array.from({ length: 5 }, (_, i) => (
            <span
                key={i + 1}
                className={i + 1 <= rating ? 'star filled' : 'star'}
                onClick={() => handleStarClick(i + 1)}
            >
            ★
            </span>
        ))}
        </div>
    );
};

export default StarRating;
