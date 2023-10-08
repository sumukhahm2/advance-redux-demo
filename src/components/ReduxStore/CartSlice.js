import { createSlice } from "@reduxjs/toolkit";

const defaultCart={
    isCart:false,
    cartNumber:0
}

const cartSlice=createSlice({
    name:'cart',
    initialState:defaultCart,
    reducers:{
      showCart(state){
        state.isCart=!state.isCart
      },
      addCartNumber(state){
        state.cartNumber=state.cartNumber+1
      },
      subtractCart(state){
        state.cartNumber=state.cartNumber-1
      }

    }
})

export const cartActions=cartSlice.actions
export default cartSlice.reducer