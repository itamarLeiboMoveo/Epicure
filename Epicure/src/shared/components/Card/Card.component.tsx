import React, { Children } from 'react';
import CardDescription from './CardDescription/CardDescription.tsx';

import './Card.style.scss'
import { CardProps } from './Card.types.ts';

const Card: React.FC<CardProps> = ({
    image,
    title,
    children
}) => {


    return (
        <div className='full-card'>
            <img src={image} alt={title} className='card-image' />
            <div className='card-details'>
                <h3 className='title'>{title}</h3>
                {children}
            </div>
        </div>
    );
};

export default Card;