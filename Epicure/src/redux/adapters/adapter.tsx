import { Restaurant, Dish, Chef } from '../../data/types/types.tsx';

class DataAdapter {
    async setRestaurants(): Promise<Restaurant[]> {
        const response = await fetch('http://localhost:3000/api/v1/restaurants', { method: 'GET' });

        if (!response.ok) {
            throw new Error('Fetching restaurant data failed.');
        }

        const restaurantsData = await response.json(); // Extract JSON data
        return restaurantsData;
    };

    async setDishes(): Promise<Dish[]> {
        const response = await fetch('http://localhost:3000/api/v1/dishes', { method: 'GET' });

        if (!response.ok) {
            throw new Error('Fetching dishes data failed.');
        }

        const dishes = await response.json();
        return dishes;
    };

    async setChefs(): Promise<Chef[]> {
        const response = await fetch('http://localhost:3000/api/v1/chefs', { method: 'GET' });

        if (!response.ok) {
            throw new Error('Fetching chefs data failed.');
        }

        const chefs = await response.json();
        return chefs;
    };

    async setChefOfTheWeek(): Promise<Chef>{
        const chefs = await this.setChefs();
        const chefOfTheWeek = chefs.find(chef => chef.isChefOfTheWeek);
        if (!chefOfTheWeek) {
            throw new Error('Chef of the week not found');
        }
        return chefOfTheWeek;
    };
    
}

const dataAdapter = new DataAdapter();
export default dataAdapter;