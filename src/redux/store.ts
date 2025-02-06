import { combineReducers, configureStore } from '@reduxjs/toolkit'
import appReducer from './appReducer'
import clockReducer from './time'

// // https://redux.js.org/usage/usage-with-typescript#type-checking-middleware
export const rootReducer = combineReducers({
	app: appReducer,
	clock: clockReducer,
})

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefault) => getDefault().concat(
		// custom middleware goes here
	),
})
