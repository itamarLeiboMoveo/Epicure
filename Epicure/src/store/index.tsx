import { configureStore }from '@reduxjs/toolkit';

import dataSlice from './data-slice.tsx';

const store = configureStore({
    reducer: { data: dataSlice.reducer }
});

export default store;