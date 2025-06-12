import {createSlice} from '@reduxjs/toolkit'

const intialState={
    cart:[ ]
}

const cartSlice= createSlice({
    name:'cart',
    intialState,
    reducers:{
        addItem:(state,action)=>{
            state.cart.push(action.payload)
        },
        removeItems:(state,action)=>{
    state.cart=state.cart.filter((item)=>item.id!==action.payload.id)
        },
        updateItemQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            if (item) {
            item.quantity = action.payload.quantity; // Update quantity
    }
}
    }
})

export const {addItem,removeItems,updateItemQuantity} = cartSlice.actions;

export default cartSlice.reducer;