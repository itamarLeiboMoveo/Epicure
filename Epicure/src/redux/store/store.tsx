import { configureStore }from '@reduxjs/toolkit';

import restaurantsSlice from './restaurants-slice.tsx';
import dishesSlice from './dishes-slice.tsx';
import ChefsSlice from './chefs-slice.tsx';

const store = configureStore({
    reducer: { restaurants: restaurantsSlice.reducer, dishes: dishesSlice.reducer, chefs: ChefsSlice.reducer }
});

export default store;