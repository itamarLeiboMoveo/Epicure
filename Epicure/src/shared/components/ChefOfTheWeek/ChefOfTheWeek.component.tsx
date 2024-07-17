import React from 'react';
import CardSection from '../CardSection/CardSection.component.tsx';
import Card from '../Card/Card.component.tsx';

import data from '../../../data/backend.json';
import { chefText } from './ChefOfTheWeek.text.ts';

import './ChefOfTheWeek.style.scss';

function ChefOfTheWeek() {
    const { restaurants } = data;

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
                <CardSection title="Yossi's Restaurants" isChefsRestaurants={true}>
                    {restaurants.map((rest, index) => (
                        <Card
                            key={index}
                            image={rest.image}
                            title={rest.title} />
                    ))}
                </CardSection>
            </div>
        </div>
    );
}

export default ChefOfTheWeek;