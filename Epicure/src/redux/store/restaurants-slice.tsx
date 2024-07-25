import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setRestaurants, setDishes } from '../thunks/dataThunk.tsx';
import { Restaurant } from '../../data/types/types.tsx';
export interface RestaurantState {
    restaurants: Restaurant[];
}

const initialState: RestaurantState = {
    restaurants: []
};

const restaurantsSlice = createSlice({
    name: 'restaurant',
    initialState,
    reducers: {
        // getData(state, action) {
        //     state.restaurants = action.payload.restaurants;
        //     state.dishes = action.payload.dishes;
        // },
        // setRestaurants(state, action) {
        //     state.restaurants = action.payload.restaurants;
        // },
        // setDishes(state, action) {
        //     state.dishes = action.payload.dishes;
        // }
    },
    extraReducers: builder => {
        builder.addCase(setRestaurants.fulfilled, (state, action) => {
            state.restaurants = action.payload;
        });
    }
});

export const restaurantsActions = restaurantsSlice.actions;
export default restaurantsSlice;