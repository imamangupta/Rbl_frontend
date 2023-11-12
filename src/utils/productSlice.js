import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "product",
    initialState:{
        items:[],
    },
    reducers:{
        addItem: (state, action) =>{
            state.items.push(action.payload);
        },
        removeItem: (state)=>{
            state.items.pop();
        },
        clearProduct: (state) =>{
            state.items.length = 0;
        },
    },
});

export const { addItem, removeItem, clearProduct} = productSlice.actions;

export default productSlice.reducer;