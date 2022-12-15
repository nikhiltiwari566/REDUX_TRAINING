import { configureStore } from '@reduxjs/toolkit';

// const reduxLogger = require('redux-logger');
import cakeReducer from '../features/cake/cakeSlice';
import icecreamReducer from '../features/icecream/icecreamSlice';
import useReducer from '../features/user/userSlice';
// const logger = reduxLogger.createLogger();

const store = configureStore({
	reducer: {
		cake: cakeReducer,
		icecream: icecreamReducer,
		user: useReducer,
	},
	// middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),


})

export default store