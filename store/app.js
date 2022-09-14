import { configureStore } from '@reduxjs/toolkit'
import { barangReducer } from './../actions/barang'


export const store = configureStore({
    reducer: {
        products: barangReducer
    }
})