import { configureStore } from "@reduxjs/toolkit";
import tasksSlice from "./features/tasks";

export const store = configureStore({
    reducer: {
        tasks: tasksSlice,
    },
});
