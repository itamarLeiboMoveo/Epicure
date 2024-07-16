import React from 'react';
import Stars from "../Card/Stars/Stars.component.tsx";

import './Card.style.scss';
import { CardProps } from './Card.types.ts';

const Card: React.FC<CardProps> = ({
    image,
    title,
    body,
    icon,
    shekel,
    price,
    score,
    responsiveDisplay = false
}) => {
    return (
        <div className='full-card'>
            <img src={image} alt={title} className='card-image' />
            <div className='card-details'>
                <h3 className='title'>{title}</h3>
                {icon && (
                    <>
                        {responsiveDisplay && <img className='icon' src={icon} alt={title} />}
                    </>
                )}
                {body && <h4 className='body'>{body}</h4>}
                {score && (
                    <div className='stars'>
                        <Stars score={score} />
                    </div>
                )}
                {icon && (
                    <>
                        {!responsiveDisplay && <img className='icon' src={icon} alt={title} />}
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
