import { createSlice } from "@reduxjs/toolkit";
import { COUNTER_ACTIONS_TYPES } from "../../constants";

const initialState = { count: 0,lastState: "" };

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment: (state) => {
            state.count+= 1;
            state.lastState = COUNTER_ACTIONS_TYPES.INCREMENT
        },
        decrement: (state) => {
            state.count-= 1;
            state.lastState = COUNTER_ACTIONS_TYPES.DECREMENT
        }
    }
});

export const { increment,decrement } = counterSlice.actions;

export default counterSlice.reducer