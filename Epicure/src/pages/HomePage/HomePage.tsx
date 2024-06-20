import React from 'react';
import Card from '../../shared/components/Card/Card.tsx';
import claro from "../../assests/images/claro.svg";

function HomePage(){
    const description = {
        title: "Claro",
        body: "Ran Shmueli"
    }
    const props = {
        image: claro,
        description
    }

    return(
        <div>
            <Card {...props}/>
        </div>
    );
}
export default HomePage;