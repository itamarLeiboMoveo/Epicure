import React, { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import MobileHeader from '../../shared/components/Header/MobileHeader.component.tsx';
import DesktopHeader from '../../shared/components/Header/DesktopHeader.component.tsx';
import Card from '../../shared/components/Card/Card.component.tsx';
import MobileCardSection from '../../shared/components/CardSection/MobileCardSection.component.tsx';
import DesktopCardSection from '../../shared/components/CardSection/DesktopCardSection.component.tsx';
import Hero from '../../shared/components/Hero/Hero.component.tsx';
import IconMeaning from '../../shared/components/IconMeaning/IconMeaning.component.tsx';
import MobileFooter from '../../shared/components/Footer/MobileFooter.component.tsx';
import DesktopFooter from '../../shared/components/Footer/DesktopFooter.component.tsx';
import ChefOfTheWeek from '../../shared/components/ChefOfTheWeek/ChefOfTheWeek.component.tsx';

import data from '../../data/backend.json';

import { Restaurant, Dish, popRestaurantsProps, dishProps, iconsDict } from '../../data/types/types.tsx'

function HomePage() {
    const { icons, nameToImageRestaurant, nameToImageDish } = data;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, [windowWidth]);

    const responsiveDisplay = useMemo(() => windowWidth >= 400, [windowWidth]);

    const CardSection = responsiveDisplay ? DesktopCardSection : MobileCardSection;

    const restaurantsData = useSelector((state: { restaurants: { restaurants: Restaurant[] } }) => state.restaurants.restaurants || []);
    const dishesData = useSelector((state: { dishes: { dishes: Dish[] } }) => state.dishes.dishes || []);

    const popularRestaurants: popRestaurantsProps[] = [];

    restaurantsData.slice(0, 3).forEach((rest) => {
        const restImage = nameToImageRestaurant.find(item => item.title === rest.title)?.image || '';
        const restaurantToDisplay: popRestaurantsProps = {
            id: rest._id,
            image: restImage,
            title: rest.title,
            body: rest.chef.title,
            score: rest.rating
        }
        popularRestaurants.push(restaurantToDisplay);
    })

    const dishes: dishProps[] = [];
    dishesData.slice(0, 3).forEach((dish) => {
        const iconsToDisplay: string[] = [];
        dish.tags.forEach((icon) => {
            iconsToDisplay.push(icons[iconsDict[icon]].image);
        })

        const dishImage = nameToImageDish.find(item => item.title === dish.title)?.image || '';
        const dishToDisplay: dishProps = {
            id: dish._id,
            image: dishImage,
            title: dish.title,
            body: dish.ingredients.join(', '),
            icons: iconsToDisplay,
            price: dish.price,
            shekel: icons[13].image
        }
        dishes.push(dishToDisplay);
    })

    return (
        <div className='home-body'>

            {responsiveDisplay ? <DesktopHeader /> : <MobileHeader />}

            <Hero />

            <CardSection title="POPULAR RESTAURANTS IN EPICURE:" sectionNumber={1}>

                {popularRestaurants.map((pop) => (
                    <Card
                        cardNumber={1}
                        key={pop.id}
                        image={pop.image}
                        title={pop.title}
                        body={pop.body}
                        score={Number(pop.score)} />
                ))}
            </CardSection>

            <CardSection title="SIGNATURE DISH OF:" sectionNumber={2}>
                {dishes.map((dish) => (
                    <Card
                        cardNumber={2}
                        key={dish.id}
                        image={dish.image}
                        title={dish.title}
                        body={dish.body}
                        icons={dish.icons}
                        shekel={dish.shekel}
                        price={dish.price}
                        responsiveDisplay={responsiveDisplay} />
                ))}
            </CardSection>

            <IconMeaning />

            <ChefOfTheWeek responsiveDisplay={responsiveDisplay} />

            {responsiveDisplay ? <DesktopFooter /> : <MobileFooter />}
        </div>
    );
}

export default HomePage;
