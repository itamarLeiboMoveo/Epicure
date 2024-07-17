import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { EffectCoverflow } from 'swiper/modules';
import SectionButton from './components/SectionButton/SectionButton.component.tsx';

import { CardTableProps } from './CardSection.types.ts';

import './CardSection.style.scss';


const CardTable: React.FC<CardTableProps> = ({
    title,
    isChefsRestaurants,
    children
}) => {
    const titleClassName = isChefsRestaurants ? 'title chefs-restaurants-title' : 'title';
    const sectionClassName = isChefsRestaurants ? 'section chefs-restaurants-section' : 'section';
    const cardSection = isChefsRestaurants ? 'chefs-restaurants-cs-container' : 'cardsection-container';

    return (
        <div className={cardSection}>
            <h1 className={titleClassName}>{title}</h1>
            <Swiper
                effect={'coverflow'}
                spaceBetween={24}
                slidesPerView={1.33}
                loop={true}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow]}
            >
                <div className={sectionClassName}>
                    {React.Children.map(children, (child) => (
                        <SwiperSlide key={children} className={sectionClassName}>
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