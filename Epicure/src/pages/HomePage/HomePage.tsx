import React, { useState, useEffect, useMemo } from 'react';
import MobileHeader from '../../shared/components/Header/MobileHeader.component.tsx';
import DesktopHeader from '../../shared/components/Header/DesktopHeader.component.tsx';
import Card from '../../shared/components/Card/Card.component.tsx';
import CardSection from '../../shared/components/CardSection/CardSection.component.tsx';
import Hero from '../../shared/components/Hero/Hero.component.tsx';
import IconMeaning from '../../shared/components/IconMeaning/IconMeaning.component.tsx';
import MobileFooter from '../../shared/components/Footer/MobileFooter.component.tsx';
import DesktopFooter from '../../shared/components/Footer/DesktopFooter.component.tsx';

import data from '../../data/backend.json';
import ChefOfTheWeek from '../../shared/components/ChefOfTheWeek/ChefOfTheWeek.component.tsx';

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
        <div className='home-body'>

            
            {responsiveDisplay ? <DesktopHeader /> :  <MobileHeader />}

            <Hero />
            
            <CardSection title="POPULAR RESTAURANT IN EPICURE:" isChefsRestaurants={false}>

                {popularRestaurants.map((pop, index) => (
                    <Card
                        key={index}
                        image={pop.image}
                        title={pop.title}
                        body={pop.body}
                        score={Number(pop.score)} />
                ))}
            </CardSection>

            <CardSection title="SIGNATURE DISH OF:" isChefsRestaurants={false}>
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

            <IconMeaning/>

            <ChefOfTheWeek />

            {responsiveDisplay ? <DesktopFooter/> :<MobileFooter />}
        </div>
    );
}

export default HomePage;
