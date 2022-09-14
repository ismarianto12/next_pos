import { createSlice } from "@reduxjs/toolkit"

export const barangSlice = createSlice({
    name: 'barang',
    initialState: { value: [] },
    reducers: {
        createbarang: (state, action) => {

        },
        updatebarang: (state, action) => {

        },
        deletebarang: (state, action) => {

        }
    }
})


export const {
    createbarang,
    updatebarang,
    deletebarang } = barangSlice.actions

export default barangSlice.reducer