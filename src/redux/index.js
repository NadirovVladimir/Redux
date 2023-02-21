import { configureStore,combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counter";
import themeReducer from './reducers/theme'

export const store = configureStore({
    reducer:combineReducers({
        counter:counterReducer,
        theme:themeReducer   
    })
});