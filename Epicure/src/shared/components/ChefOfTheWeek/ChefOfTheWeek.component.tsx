import React from 'react';
import { useSelector } from 'react-redux';

import MobileCardSection from '../CardSection/MobileCardSection.component.tsx';
import DesktopCardSection from '../CardSection/DesktopCardSection.component.tsx';
import Card from '../Card/Card.component.tsx';

import data from '../../../data/backend.json';
import { Chef, chefOfTheWeekRestaurantsProps } from '../../../data/types/types.tsx';

import './ChefOfTheWeek.style.scss';

function ChefOfTheWeek({ responsiveDisplay }) {
    const { nameToImageChefsRestaurant } = data;

    const chefOfTheWeek = useSelector((state: { chefs: { chefOfTheWeek: Chef } }) => state.chefs.chefOfTheWeek) || {};
    const restaurantsFromBack = chefOfTheWeek.restaurants || [];
    const chefName = chefOfTheWeek.title || "";
    const firstName = chefName.split(' ')[0] || "";

    const restaurants: chefOfTheWeekRestaurantsProps[] = [];
    restaurantsFromBack.slice(0, 3).forEach((rest) => {
        const restImage = nameToImageChefsRestaurant.find(item => item.title === rest.title)?.image || '';

        const restaurantToDisplay: chefOfTheWeekRestaurantsProps = {
            id: rest._id,
            image: restImage,
            title: rest.title
        }
        restaurants.push(restaurantToDisplay);
    })

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
                    {restaurants.map((rest) => (
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