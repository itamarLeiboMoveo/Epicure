import React, { useState, useEffect } from 'react';
import Card from '../../shared/components/Card/Card.component.tsx';
import data from '../../data/backend.json';
import CardTable from '../../shared/components/CardTable/CardTable.component.tsx';
import Stars from '../../shared/components/Card/Stars/Stars.component.tsx';

function HomePage() {
    const { popular, dishes, restaurants } = data;

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <CardTable title="POPULAR RESTAURANT IN EPICURE:">
                {popular.map((pop, index) => (
                    <Card key={index} image={pop.image} title={pop.title}>
                        <h4 className='body'>{pop.body}</h4>
                        {windowWidth > 400 && <div className='stars'>
                            <Stars score={pop.score} />
                        </div>}
                    </Card>
                ))}
            </CardTable>

            <CardTable title="SIGNATURE DISH OF:">
                {dishes.map((dish, index) => (
                    <Card key={index} image={dish.image} title={dish.title}>
                        {windowWidth >= 400 && <img className='icon' src={dish.icon} alt={dish.title} />}
                        <h4 className='body'>{dish.body}</h4>
                        {windowWidth < 400 && <img className='icon' src={dish.icon} alt={dish.title} />}
                        <div className='price-div'>
                            {windowWidth >= 400 && <div className="line"></div>}
                            <img className='shekel' src={dish.shekel} alt="shekel" />
                            <h3 className='price'>{dish.price}</h3>
                            {windowWidth >= 400 && <div className="line"></div>}
                        </div>

                    </Card>
                ))}
            </CardTable>

            <CardTable title='YOSSI`S RESTAURANT'> {/*will change to general chef */}
                {restaurants.map((rest, index) => (
                    <Card key={index} image={rest.image} title={rest.title}>
                        <div></div>
                    </Card>
                ))}
            </CardTable>

        </div>
    );
};
export default HomePage;