import { configureStore } from "@reduxjs/toolkit";


const appStore = configureStore({
    reducer: {
        cart:createReducer,
    }
});
export default appStore;