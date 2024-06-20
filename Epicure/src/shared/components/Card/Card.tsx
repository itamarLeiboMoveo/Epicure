import React from 'react';
import CardDescription from './CardDescription/CardDescription.tsx';

import './Card.scss'

function Card(props){ 

    return(
        <div className='full-card'>
            <img src={props.image} alt="Card image" className='card-image'/>
            <div className='description-div'>
                <CardDescription {...props.description}/>
            </div>
        </div>
    );
}
export default Card;