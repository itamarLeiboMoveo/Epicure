import { createSlice } from '@reduxjs/toolkit';
import { getChefs, getDishes, getRestaurants } from '../thunks/dataThunk.tsx';
import { Chef, Dish, Restaurant, EStatus } from '../../data/types/backendTypes.tsx';

interface DataState {
    chefs: {
        chefs: Chef[];
        chefOfTheWeek: Chef;
    };
    dishes: {
        dishes: Dish[];
    };
    restaurants: {
        restaurants: Restaurant[];
    };
}

const initialState: DataState = {
    chefs: {
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
    },
    dishes: {
        dishes: [],
    },
    restaurants: {
        restaurants: []
    }
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(getChefs.fulfilled, (state, action) => {
                state.chefs.chefs = action.payload;
                state.chefs.chefOfTheWeek = action.payload.find(chef => chef.isChefOfTheWeek) || initialState.chefs.chefOfTheWeek;
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
