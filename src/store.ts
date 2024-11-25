/** @format */

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import postReducer from './slices/postSlice';
import { apiSlice } from './slices/apiSlice';

export const store = configureStore({
	reducer: {
		counter: counterReducer,
		post: postReducer,
		[apiSlice.reducerPath]: apiSlice.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
