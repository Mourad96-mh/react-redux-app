
import {configureStore, createSlice} from '@reduxjs/toolkit'




const initialAuthenticatedState = {
    isAuth: false,
}


const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthenticatedState,
    reducers: {
        login(state){
            state.isAuth = true;
        },
        logout(state){
            state.isAuth = false;
        }

    }
})

const store = configureStore({
        reducer: {
            auth: authSlice.reducer
        }
})

export const authActions = authSlice.actions;

export default store;
