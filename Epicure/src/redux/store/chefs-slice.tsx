import { createSlice } from '@reduxjs/toolkit';

import { setChefOfTheWeek, setChefs } from '../thunks/dataThunk.tsx';
import { Chef, EStatus } from '../../data/types/types.tsx';
export interface chefsState {
    chefs: Chef[];
    chefOfTheWeek: Chef
}

const initialState: chefsState = {
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

const ChefsSlice = createSlice({
    name: 'chefs',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(setChefs.fulfilled, (state, action) => {
            state.chefs = action.payload;
        });
        builder.addCase(setChefOfTheWeek.fulfilled, (state, action) => {
            state.chefOfTheWeek = action.payload;
        });
    }
});

export const chefsActions = ChefsSlice.actions;
export default ChefsSlice;