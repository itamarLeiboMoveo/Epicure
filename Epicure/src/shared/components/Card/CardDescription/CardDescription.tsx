import React from 'react';
import "./CardDescription.scss";

function CardDescription(props){

    return(
        <div className='description'>
            <h3 className='title'>{props.title}</h3>
            <h4 className='body'>{props.body}</h4>
        </div>
    );
}
export default CardDescription;