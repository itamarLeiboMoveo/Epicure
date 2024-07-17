import React from 'react';

import data from '../../../data/backend.json';

import './IconMeaning.style.scss';
import IconContainer from './components/IconContainer/IconContainer.component.tsx';

function IconMeaning() {
    const { icons } = data;

    return (
        <div className='icon-meaning-container'>
            <h1 className='icon-meaning-title'>THE MEANING OF OUR ICONS:</h1>
            <div className='icons-container'>
                <IconContainer iconImage={icons[7].image} iconName='spicy' />
                <IconContainer iconImage={icons[8].image} iconName='vegeterian' />
                <IconContainer iconImage={icons[9].image} iconName='vegan' />
            </div>
        </div>
    );
}

export default IconMeaning;