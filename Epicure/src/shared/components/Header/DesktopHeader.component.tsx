import React from 'react';
import HeaderIcon from './components/HeaderIcon/HeaderIcon.component.tsx';

import data from "../../../data/backend.json";
import "./Header.style.scss";

function DesktopHeader() {
    const { icons } = data;

    return (
        <div className='header-container'>
            <div className='left-icons'>
                {icons.map((item, index) => {
                    if (index === 3) {
                        return (
                            <HeaderIcon key={item.id} id={item.id} image={item.image} />
                        );
                    }
                    return null;
                })}

                <h1 className='website-title'>EPICURE</h1>

                <div className='page-links'>
                    <button className='link'>Restaurants</button>
                    <button className='link'>Chefs</button>
                </div>
            </div>
            <div className='right-icons'>
                {icons.map((item, index) => {
                    if (index >= 4 && index < 7) {
                        return (
                            <HeaderIcon key={item.id} id={item.id} image={item.image} />
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default DesktopHeader;
