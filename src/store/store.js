import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducer as favoritesReduser } from "./favorite/favorite.slice";
import { userSlice } from "./user/user.slice";

const reducers = combineReducers ({
    favorites: favoritesReduser,
    user: userSlice.reducer,
})

export const store = configureStore({
    reducer: reducers,
}) 