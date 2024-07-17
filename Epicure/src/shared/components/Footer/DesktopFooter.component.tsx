import React from 'react';

import data from '../../../data/backend.json';
import { aboutUsDesktop1, aboutUsDesktop2 } from './Footer.text.ts';

import './Footer.style.scss';

function MobileFooter() {
    const { icons } = data;

    return (
        <div className='footer'>
            <div className='gray-container'>
                <div className='left-container'>
                    <div className='about-us'>
                        <h1 className='about-us-title'> ABOUT US:</h1>
                        <p className='text'>{aboutUsDesktop1}</p>
                        <br />
                        <p className='text'>{aboutUsDesktop2}</p>
                    </div>
                    <div className='stores'>
                        <img src={icons[11].image} />
                        <img src={icons[12].image} />
                    </div>
                </div>
                <img className='logo' src={icons[10].image} />
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