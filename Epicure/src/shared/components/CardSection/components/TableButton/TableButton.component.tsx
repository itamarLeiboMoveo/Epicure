import React from 'react';
import './TableButton.style.scss';

function TableButton() {

    return (
        <div className='button-container'>
            <button className='restaurants-button'>All Restaurants</button>
            <img className='button-icon' src="../../../../../assests/icons/arrowButton.svg" />
        </div>
    );
}

export default TableButton;