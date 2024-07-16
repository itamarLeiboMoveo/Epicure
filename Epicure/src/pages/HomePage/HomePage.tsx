import React, { useState, useEffect, useMemo } from 'react';
import Card from '../../shared/components/Card/Card.component.tsx';
import data from '../../data/backend.json';
import CardSection from '../../shared/components/CardSection/CardSection.component.tsx';

function HomePage() {
    const { popularRestaurants, dishes, restaurants } = data;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const responsiveDisplay = useMemo(() => windowWidth >= 400, [windowWidth]);

    return (
        <div>
            <CardSection title="POPULAR RESTAURANT IN EPICURE:">
                {popularRestaurants.map((pop, index) => (
                    <Card
                        key={index}
                        image={pop.image}
                        title={pop.title}
                        body={pop.body}
                        score={Number(pop.score)} />
                ))}
            </CardSection>

            <CardSection title="SIGNATURE DISH OF:">
                {dishes.map((dish, index) => (
                    <Card
                        key={index}
                        image={dish.image}
                        title={dish.title}
                        body={dish.body}
                        icon={dish.icon}
                        shekel={dish.shekel}
                        price={dish.price}
                        responsiveDisplay={responsiveDisplay} />
                ))}
            </CardSection>

            <CardSection title="YOSSIS RESTAURANT">
                {restaurants.map((rest, index) => (
                    <Card
                        key={index}
                        image={rest.image}
                        title={rest.title} />
                ))}
            </CardSection>
        </div>
    );
}

export default HomePage;
