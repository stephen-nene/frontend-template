// store.js

import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

const store = configureStore({
  reducer: rootReducer,
  // You can add middleware, dev tools, and other options here if needed
});

export default store;
