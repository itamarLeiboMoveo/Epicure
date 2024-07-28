import { createSlice } from '@reduxjs/toolkit';
import { getChefs, getDishes, getRestaurants } from '../thunks/dataThunk.tsx';
import { Chef, Dish, Restaurant, EStatus } from '../../data/types/backendTypes.tsx';

interface ChefsState {
    chefs: Chef[];
    chefOfTheWeek: Chef;
}

interface DishState {
    dishes: Dish[];
}

interface RestaurantState {
    restaurants: Restaurant[];
}

const initialChefsState: ChefsState = {
    chefs: [],
    chefOfTheWeek: {
        _id: "",
        title: "",
        image: "",
        description: "",
        restaurants: [],
        isChefOfTheWeek: false,
        status: EStatus.ACTIVE,
    }
};

const initialDishState: DishState = {
    dishes: [],
};

const initialRestaurantState: RestaurantState = {
    restaurants: []
};

const dataSlice = createSlice({
    name: 'data',
    initialState: {
        chefs: initialChefsState,
        dishes: initialDishState,
        restaurants: initialRestaurantState
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getChefs.fulfilled, (state, action) => {
                state.chefs.chefs = action.payload;
                state.chefs.chefOfTheWeek = action.payload.find(chef => chef.isChefOfTheWeek) || initialChefsState.chefOfTheWeek;
            })
            .addCase(getDishes.fulfilled, (state, action) => {
                state.dishes.dishes = action.payload;
            })
            .addCase(getRestaurants.fulfilled, (state, action) => {
                state.restaurants.restaurants = action.payload;
            });
    }
});

export const dataActions = dataSlice.actions;
export default dataSlice;
