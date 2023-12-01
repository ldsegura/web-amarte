import { configureStore } from "@reduxjs/toolkit";
import pageDataReducer from "./features/pageDataReducer";
import currencyReducer from "./features/currencyReducer";
import { pageDataApi } from "./services/pageDataApi";
import { statesDataApi } from "./services/statesDataApi";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer:{
        pageDataReducer,
        currencyReducer,
        [pageDataApi.reducerPath]: pageDataApi.reducer,
        [statesDataApi.reducerPath]: statesDataApi.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([
        pageDataApi.middleware,
        statesDataApi.middleware
    ])
})

setupListeners(store.dispatch);