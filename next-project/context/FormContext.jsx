'use client'
import { createContext, useState, useContext } from 'react'

const FormContext = createContext()

export const FormProvider = ({ children }) => {
  const [data, setData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
    gender: '',
    address: '',
  })

  return (
    <FormContext.Provider value={{ data, setData }}>
      {children}
    </FormContext.Provider>
  )
}

export const useForm = () => useContext(FormContext)
