import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
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
            <Swiper
                spaceBetween={-10}
                slidesPerView={1.33}
                loop={true}
            >
                <div className={sectionClassName}>
                    {React.Children.map(children, (child) => (
                        <SwiperSlide className={sectionClassName}>
                            {child}
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
            <SectionButton />
        </div>
    );
};

export default CardTable;