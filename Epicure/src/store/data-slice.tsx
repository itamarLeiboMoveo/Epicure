import { createSlice } from '@reduxjs/toolkit';

export interface DataProps {
    restaurants: any;
    dishes: any;
}


export interface DataState {
    data: DataProps;
}

const initialState: DataProps = {
    restaurants: [],
    dishes: []
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        getData(state, action) {
            state.restaurants = action.payload.restaurants;
            state.dishes = action.payload.dishes;
        },
        getRestaurants(state, action) {
            state.restaurants = action.payload.restaurants;
        },
        getDishes(state, action) {
            state.dishes = action.payload.dishes;
        }
    }
});

export const dataActions = dataSlice.actions;
export default dataSlice;