import React from 'react';
import Card from '../../shared/components/Card/Card.component.tsx';
import data from '../../data/backend.json';

function HomePage() {
    const { popular, dishes, restaurants } = data;

    const { image, title } = popular[0];
    const dish1 = dishes[0];



    return (
        <div>
            {popular.map((pop, index) => (
                <Card key={index} image={pop.image} title={pop.title}>
                    <h4 className='body'>{pop.body}</h4>
                </Card>
            ))}

            {dishes.map((dish, index) => (
                <Card key={index} image={dish.image} title={dish.title}>
                    <h4 className='body'>{dish.body}</h4>
                    <img className='icon' src={dish.icon} alt={dish.title} />
                    <div className='price-div'>
                        <img className='shekel' src={dish.shekel} alt="shekel" />
                        <h3 className='price'>{dish.price}</h3>
                    </div>

                </Card>
            ))}

            {restaurants.map((rest, index) => (
                <Card key={index} image={rest.image} title={rest.title}>
                    <></>
                </Card>
            ))}

        </div>
    );
}
export default HomePage;