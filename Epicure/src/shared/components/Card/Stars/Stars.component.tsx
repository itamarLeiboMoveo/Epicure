import React from 'react';
import data from '../../../../../src/data/backend.json';

function Stars( {score} ) {
    const { icons } = data;
    const validScore = Math.max(0, Math.min(score, 5));
    const starsArray = Array(validScore).fill(0);
    const emptyStarsArray = Array(5 - validScore).fill(1);
    const combinedStarsArray = starsArray.concat(emptyStarsArray);
    return (
        <div className='star-container'>
            {combinedStarsArray.map((value, index) => (
                <img
                    key={index}
                    className='star'
                    src={value === 0 ? icons[0].image : icons[1].image}
                    alt='star'
                />
            ))}
        </div>
    );
};

export default Stars;