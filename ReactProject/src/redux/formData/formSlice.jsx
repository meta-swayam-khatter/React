import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: '',
    age: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
}

const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        updateField: (state, action) => {
            const { name, value } = action.payload
            state[name] = value
        },
        clearForm: () => initialState,
    },
})

export const { updateField, clearForm } = formSlice.actions

export default formSlice.reducer