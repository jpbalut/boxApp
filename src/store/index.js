import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

import cartReducer from './cart/cartSlice';
import { categoriesApi } from './categories/api';
import categoriesReducer from './categories/categoriesSlice';
import productReducer from './products/productsSlice';
import serviceReducer from './services/servicesSlice';

export const store = configureStore({
  reducer: {
    products: productReducer,
    categories: categoriesReducer,
    cart: cartReducer,
    services: serviceReducer,
    [categoriesApi.reducerPath]: categoriesApi.reducer,
    // [productsApi.reducerPath]: productsApi.reducer,
    // [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      categoriesApi.middleware,
      // productsApi.middleware,
      // ordersApi.middleware
    ),
});

setupListeners(store.dispatch);