import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items: []
    },
    reducers: {
        addItems: (state, action) => {
            // mutating the state
            state.items.push(action.payload);
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearItem: (state) => {
            // RTK - either the existing state or return a new state
            state.items.length = 0; // state = []
            // return({items:[]}) // this new [] will be replace inside originalstate = []
        }
    }
});
export const {addItems, removeItem, clearItem} = cartSlice.actions;
export default cartSlice.reducer;