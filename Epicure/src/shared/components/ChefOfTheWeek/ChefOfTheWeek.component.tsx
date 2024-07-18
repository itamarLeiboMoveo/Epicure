import React from 'react';
import MobileCardSection from '../CardSection/MobileCardSection.component.tsx';
import DesktopCardSection from '../CardSection/DesktopCardSection.component.tsx';
import Card from '../Card/Card.component.tsx';

import data from '../../../data/backend.json';
import { chefText } from './ChefOfTheWeek.text.ts';

import './ChefOfTheWeek.style.scss';

function ChefOfTheWeek({ responsiveDisplay }) {
    const { restaurants } = data;

    const CardSection = responsiveDisplay ? DesktopCardSection : MobileCardSection;
    return (
        <div className='chef-of'>
            <h1 className='chef-title'>CHEF OF THE WEEK:</h1>
            <div className='image-and-text'>
                <div className='chef-image'>
                    <h1 className='chef-name'>Yossi Shitrit</h1>
                </div>
                <div className='chef-text'>
                    <p>{chefText}</p>
                </div>
            </div>
            <div className='chef-restaurants'>
                <CardSection title="Yossi's Restaurants" sectionNumber={3}>
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