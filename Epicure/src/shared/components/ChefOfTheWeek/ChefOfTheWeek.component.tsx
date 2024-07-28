import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import MobileCardSection from '../CardSection/MobileCardSection.component.tsx';
import DesktopCardSection from '../CardSection/DesktopCardSection.component.tsx';
import Card from '../Card/Card.component.tsx';

import data from '../../../data/backend.json';
import { Chef } from '../../../data/types/backendTypes.tsx';
import { chefOfTheWeekRestaurantsProps } from '../../../data/types/frontendTypes.tsx';

import './ChefOfTheWeek.style.scss';

function ChefOfTheWeek({ responsiveDisplay }) {
    const [chefsRestaurants, setChefsRestaurants] = useState<chefOfTheWeekRestaurantsProps[]>([]);

    const { nameToImageChefsRestaurant } = data;

    const chefOfTheWeek = useSelector((state: { chefs: { chefOfTheWeek: Chef } }) => state.chefs.chefOfTheWeek) || {};
    const restaurantsFromBack = chefOfTheWeek.restaurants || [];
    const chefName = chefOfTheWeek.title || "";
    const firstName = chefName.split(' ')[0] || "";

    useEffect(() => {
        const newChefsRestaurants = restaurantsFromBack.slice(0, 3).map((rest) => {
            const restImage = nameToImageChefsRestaurant.find(item => item.title === rest.title)?.image || '';

            return {
                id: rest._id,
                image: restImage,
                title: rest.title
            }
        });

        setChefsRestaurants(newChefsRestaurants);
    }, [restaurantsFromBack, nameToImageChefsRestaurant]);


    const CardSection = responsiveDisplay ? DesktopCardSection : MobileCardSection;

    return (
        <div className='chef-of'>
            <h1 className='chef-title'>CHEF OF THE WEEK:</h1>
            <div className='image-and-text'>
                <div className='chef-image'>
                    <h1 className='chef-name'>{chefName}</h1>
                </div>
                <div className='chef-text'>
                    <p>{chefOfTheWeek.description}</p>
                </div>
            </div>
            <div className='chef-restaurants'>
                <CardSection title={`${firstName}'s Restaurants`} sectionNumber={3}>
                    {chefsRestaurants.map((rest) => (
                        <Card
                            cardNumber={3}
                            key={rest.id}
                            image={rest.image}
                            title={rest.title} />
                    ))}
                </CardSection>
            </div>
        </div>
    );
}

export default ChefOfTheWeek;