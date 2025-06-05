import { createSlice } from '@reduxjs/toolkit'

export const formSlice = createSlice({
    name: 'formData',
    initialState: {
        data: {
            name: '',
            age: '',
            email: '',
            phone: '',
            gender: '',
            address: '',
        }
    },
    reducers: {
        handleSubmit: (state, action) => {
            state.name = action.payload.name,
            state.age = action.payload.age,
            state.email = action.payload.email,
            state.phone = action.payload.phone,
            state.gender = action.payload.gender,
            state.address = action.payload.address
        }
    },
})

// Action creators are generated for each case reducer function
export const { handleSubmit } = formSlice.actions

export default formSlice.reducer