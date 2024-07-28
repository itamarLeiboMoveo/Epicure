import { Restaurant, Dish, Chef } from '../../data/types/backendTypes.tsx';

class DataAdapter {
    async fetchData<T>(endpoint: string): Promise<T> {
        const response = await fetch(`http://localhost:3000/api/v1/${endpoint}`, { method: 'GET' });
    
        if (!response.ok) {
            throw new Error(`Fetching data from http://localhost:3000/api/v1/${endpoint} failed.`);
        }
    
        const data = await response.json();
        return data as T;
    }
        
    async getRestaurants(): Promise<Restaurant[]> {
        return this.fetchData<Restaurant[]>('restaurants');
    }
    
    async getDishes(): Promise<Dish[]> {
        return this.fetchData<Dish[]>('dishes');
    }
    
    async getChefs(): Promise<Chef[]> {
        return this.fetchData<Chef[]>('chefs');
    }
    
}

const dataAdapter = new DataAdapter();
export default dataAdapter;