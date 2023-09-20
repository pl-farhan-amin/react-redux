import { createSlice } from "@reduxjs/toolkit";

const initialState = { users: [],isLoading: false,error: null };

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state,action) => {
            state.users = action.payload;
            state.isLoading = false;
        },
        getUser: (state) => {
            state.isLoading = true; 
        },
        userRequestFail: (state,action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
})

export const { setUser,getUser,userRequestFail } = userSlice.actions;

export default userSlice.reducer;