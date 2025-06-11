import {configureStore} from '@reduxjs/toolkit'

import cartReducer from './cartSlice'

const store = configureStore({
    reducers:{
        cart:cartReducer,
    }
})

export default store 