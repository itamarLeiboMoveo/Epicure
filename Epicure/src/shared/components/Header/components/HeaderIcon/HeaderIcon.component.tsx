import React from 'react';

const HeaderIcon = ({ id, image }) => {
    return (
        <button className={`header-icon icon-${id}`} key={id}>
            <img src={image} />
        </button>
    );
};

export default HeaderIcon;
