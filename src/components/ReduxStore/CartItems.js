import { createSlice } from "@reduxjs/toolkit";


const defaultCartItems={
    items:[],
    totalAmount:0
}

const cartItemsSlice=createSlice({
    name:'cart-items',
    initialState:defaultCartItems,
    reducers:{
        addItems(state,action){
          state.items=state.items.concat(action.payload)
        }
    }
})
export const cartItemsAction=cartItemsSlice.actions
export default cartItemsSlice.reducer