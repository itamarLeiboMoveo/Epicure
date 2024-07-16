import React from 'react';
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
                            <button className={`header-icon icon-${index}`} key={index}>
                                <img src={item.image} alt={`Icon ${index}`} />
                            </button>
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

export default DesktopHeader;
