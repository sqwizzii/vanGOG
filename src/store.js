
import { configureStore } from "@reduxjs/toolkit";
import { apiCategory } from "./apiCategory";

export const store = configureStore({
    reducer: {
        [apiCategory.reducerPath]: apiCategory.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiCategory.middleware),
});
