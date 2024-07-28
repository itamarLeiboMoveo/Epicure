import { configureStore }from '@reduxjs/toolkit';

import dataSlice from './data-slice.tsx';

const store = configureStore({
    reducer: dataSlice.reducer
});

export default store;