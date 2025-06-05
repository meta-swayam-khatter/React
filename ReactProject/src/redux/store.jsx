import { configureStore } from '@reduxjs/toolkit'
import formReducer from '../redux/formData/formSlice'

export default configureStore({
  reducer: {
    formData: formReducer,
  },
})