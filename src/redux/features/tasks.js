import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    description: "",
    status: "in-progress",
};

export const counterSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        addTask: (state) => {
            console.log(state);
        },
        updateTask: (state) => {
            console.log(state);
        },
    },
});

export const { addTask } = counterSlice.actions;

export default counterSlice.reducer;
