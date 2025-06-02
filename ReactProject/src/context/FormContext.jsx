import React, { createContext, useState } from 'react';
const FormContext = createContext();


const DataProvider = ({ children }) => {
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
    );
}

export { FormContext, DataProvider };