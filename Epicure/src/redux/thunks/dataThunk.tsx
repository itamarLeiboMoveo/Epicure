import { createAsyncThunk } from '@reduxjs/toolkit';

import dataAdapter from '../adapters/adapter.tsx';

import { THUNKS } from '../../data/types/enums.tsx';

export const getRestaurants = createAsyncThunk(
    THUNKS.GET_RESTAURANTS,
    async () => {
        try{
            const getRestaurantsResponse = await dataAdapter.getRestaurants();
            return getRestaurantsResponse;
        }catch(error: any){
            throw new Error('error fetching resaurants');
        }
    }
);

export const getDishes = createAsyncThunk(
    THUNKS.GET_DISHES,
    async () => {
        try{
            const getDishesResponse = await dataAdapter.getDishes();
            return getDishesResponse;
        }catch(error: any){
            throw new Error('error fetching resaurants');
        }
    }
);

export const getChefs = createAsyncThunk(
    THUNKS.GET_CHEFS,
    async () => {
        try{
            const getChefsResponse = await dataAdapter.getChefs();
            return getChefsResponse;
        }catch(error: any){
            throw new Error('error fetching resaurants');
        }
    }
);
