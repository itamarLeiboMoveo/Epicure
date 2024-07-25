import { createAsyncThunk } from '@reduxjs/toolkit';

import dataAdapter from '../adapters/adapter.tsx';

export const setRestaurants = createAsyncThunk(
    'setRestaurants',
    async () => {
        try{
            const setRestaurantsResponse = await dataAdapter.setRestaurants();
            return setRestaurantsResponse;
        }catch(error: any){
            throw new Error('error fetching resaurants');
        }
    }
);

export const setDishes = createAsyncThunk(
    'setDishes',
    async () => {
        try{
            const setDishesResponse = await dataAdapter.setDishes();
            return setDishesResponse;
        }catch(error: any){
            throw new Error('error fetching resaurants');
        }
    }
);

export const setChefs = createAsyncThunk(
    'setChefs',
    async () => {
        try{
            const setChefsResponse = await dataAdapter.setChefs();
            return setChefsResponse;
        }catch(error: any){
            throw new Error('error fetching resaurants');
        }
    }
);

export const setChefOfTheWeek = createAsyncThunk(
    'setChefOfTheWeek',
    async () => {
        try{
            const setChefsResponse = await dataAdapter.setChefOfTheWeek();
            return setChefsResponse;
        }catch(error: any){
            throw new Error('error fetching resaurants');
        }
    }
);
