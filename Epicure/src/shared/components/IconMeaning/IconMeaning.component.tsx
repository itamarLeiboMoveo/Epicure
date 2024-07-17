import React from 'react';

import data from '../../../data/backend.json';

import './IconMeaning.style.scss';

function IconMeaning() {
    const { icons } = data;

    return (
        <div className='icon-meaning-container'>
            <h1 className='icon-meaning-title'>THE MEANING OF OUR ICONS:</h1>
            <div className='icons-container'>
                <div className='icon-container'>
                    <img className='icon' src={icons[7].image} />
                    <h1 className='icon-name'>spicy</h1>
                </div>
                <div className='icon-container'>
                    <img className='icon' src={icons[8].image} />
                    <h1 className='icon-name'>vegeterian</h1>
                </div>
                <div className='icon-container'>
                    <img className='icon' src={icons[9].image} />
                    <h1 className='icon-name'>vegan</h1>
                </div>
            </div>
        </div>
    );
}

export default IconMeaning;