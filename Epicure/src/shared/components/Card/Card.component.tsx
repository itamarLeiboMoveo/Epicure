import React from 'react';
import Stars from "../Card/Stars/Stars.component.tsx";

import './Card.style.scss';
import { CardProps } from './Card.types.ts';

const Card: React.FC<CardProps> = ({
    cardNumber,
    image,
    title,
    body,
    icons,
    shekel,
    price,
    score,
    responsiveDisplay = false
}) => {
    const fullCard = `full-card full-card-${cardNumber}`; 


    return (
        <div className={fullCard}>
            <img src={image} alt={title} className='card-image' />
            <div className='card-details'>
                <h3 className='title'>{title}</h3>
                {icons && (
                    <>
                        {responsiveDisplay && icons.map((iconImg) => (
                           <img key={iconImg} className='icon' src={iconImg} alt={title} /> 
                        ))}
                    </>
                )}
                {body && <h4 className='body'>{body}</h4>}
                {score && (
                    <div className='stars'>
                        <Stars score={score} />
                    </div>
                )}
                {icons && (
                    <>
                        {!responsiveDisplay && icons.map((iconImg) => (
                           <img key={iconImg} className='icon' src={iconImg} alt={title} /> 
                        ))}
                    </>
                )}
                {price && shekel && (
                    <div className='price-div'>
                        <div className="line"></div>
                        <img className='shekel' src={shekel} alt="shekel" />
                        <h3 className='price'>{price}</h3>
                        <div className="line"></div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Card;
