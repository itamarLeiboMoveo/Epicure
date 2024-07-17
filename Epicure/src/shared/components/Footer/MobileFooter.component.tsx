import React from 'react';

import data from '../../../data/backend.json';
import { aboutUsMobile } from './Footer.text.ts';

import './Footer.style.scss';

function MobileFooter() {
    const { icons } = data;

    return (
        <div className='footer'>
            <div className='gray-container'>
                <img className='logo' src={icons[10].image} />
                <div className='stores'>
                    <img src={icons[11].image} />
                    <img src={icons[12].image} />
                </div>
                <div className='about-us'>
                    <h1 className='about-us-title'> ABOUT US:</h1>
                    <p className='text'>{aboutUsMobile}</p>
                </div>
            </div>
            <div className='contact'>
                <div className='links'>
                    <a>Contact Us</a>
                    <a>Term of Use</a>
                    <a>Privacy Policy</a>
                </div>
            </div>
        </div>
    );
}

export default MobileFooter;