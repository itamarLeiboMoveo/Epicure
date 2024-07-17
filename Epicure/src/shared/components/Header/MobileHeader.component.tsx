import React from 'react';

import HeaderIcon from './components/HeaderIcon/HeaderIcon.component.tsx';

import data from "../../../data/backend.json";
import "./Header.style.scss";

function MobileHeader() {
    const { icons } = data;

    return (
        <div className='header-container'>
            {icons.map((item, index) => {
                if (index === 2 || index === 3) {
                    return (
                        <HeaderIcon key={item.id} id={item.id} image={item.image} />
                    );
                }
                return null;
            })}
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

export default MobileHeader;
