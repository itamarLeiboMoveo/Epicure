import React, { Children } from 'react';
import SectionButton from './components/SectionButton/SectionButton.component.tsx';
import { CardSectionProps } from './CardSection.types.ts';

import './CardSection.style.scss';


const CardTable: React.FC<CardSectionProps> = ({
    title,
    sectionNumber,
    children
}) => {
    const isChefsRestaurants = sectionNumber === 3;
    const titleClassName = isChefsRestaurants ? 'title chefs-restaurants-title' : 'title';
    const sectionClassName = isChefsRestaurants ? 'section chefs-restaurants-section' : 'section';
    const sectionContainer = `cardsection-container cardsection-container-${sectionNumber}`;


    return (
        <div className={sectionContainer}>
            <h1 className={titleClassName}>{title}</h1>
            <div className='section-and-button'>
                <div className={sectionClassName}>
                    {children}
                </div>
                <div className='section-button' >
                    <SectionButton />
                </div>
            </div>

        </div>

    );
};

export default CardTable;