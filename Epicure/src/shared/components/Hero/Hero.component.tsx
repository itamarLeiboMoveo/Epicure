import React from 'react';

import data from '../../../data/backend.json'
import './Hero.style.scss';

function Hero() {
    const { icons } = data;

    return (
        <div className='hero'>
            <div className='hero-search'>
                <h1 className='hero-title'>Epicure works with the top
                    chef restaurants in Tel Aviv</h1>
                <form className='hero-form'>
                    <button className='hero-button'>
                        <img src={icons[4].image}/>
                    </button>
                    <input className='hero-input' type='text' placeholder='Search for restaurant cuisine, chef'></input>
                </form>
            </div>
        </div>
    );
}

export default Hero;
