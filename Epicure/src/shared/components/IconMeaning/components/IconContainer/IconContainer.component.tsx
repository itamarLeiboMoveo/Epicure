import React from 'react';

import './IconContainer.style.scss';

const IconContainer = ({ iconImage, iconName }) => (
    <div className='icon-container'>
        <img className='icon' src={iconImage} alt={iconName} />
        <h1 className='icon-name'>{iconName}</h1>
    </div>
);

export default IconContainer;
