import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice'
import cartItemsReducer from './CartItems'
const store=configureStore({
    reducer:{cart:cartReducer,cartitems:cartItemsReducer}
})

export default store