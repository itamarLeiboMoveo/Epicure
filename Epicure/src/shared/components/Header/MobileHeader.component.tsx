import React from 'react';
import data from "../../../data/backend.json";
import "./Header.style.scss";

function MobileHeader() {
    const { icons } = data;

    return (
        <div className='header-container'>
            {icons.map((item, index) => {
                if (index === 2 || index === 3) {
                    return (
                        <button className={`header-icon icon-${index}`} key={index}>
                            <img src={item.image} alt={`Icon ${index}`} />
                        </button>
                    );
                }
                return null;
            })}
            <div className='right-icons'>
                {icons.map((item, index) => {
                    if (index >= 4) {
                        return (
                            <button className="header-icon" key={index}>
                                <img src={item.image} alt={`Icon ${index}`} />
                            </button>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default MobileHeader;
