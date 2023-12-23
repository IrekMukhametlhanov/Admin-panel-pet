import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { UserShema } from '../types/userSchema';

const initialState: UserShema = {
    
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
     
    },
});

// Action creators are generated for each case reducer function
export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;