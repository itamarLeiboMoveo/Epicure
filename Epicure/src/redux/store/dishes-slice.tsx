import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { setDishes } from '../thunks/dataThunk.tsx';
import { Dish } from '../../data/types/types.tsx';
export interface DishState {
    dishes: Dish[];
}

const initialState: DishState = {
    dishes: [],
};


const dishesSlice = createSlice({
    name: 'dish',
    initialState,
    reducers: {
    },
    extraReducers: builder => {
        builder.addCase(setDishes.fulfilled, (state, action) => {
            state.dishes = action.payload;
        });

    }
});

export const dishesActions = dishesSlice.actions;
export default dishesSlice;