import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks";
import baseApi from "./features/api/baseAPI";

export const store = configureStore({
    reducer: {
        tasks: tasksSlice,
        [baseApi.reducerPath]: baseApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(baseApi.middleware),
});
