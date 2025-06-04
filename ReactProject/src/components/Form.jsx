import { useContext, useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormContext } from '../context/FormContext'
import IsFormValid from '../hooks/IsFormValid'
import axios from 'axios';

function Form() {
    const navigate = useNavigate()
    const { data, setData } = useContext(FormContext)
    const [quote, setQuote] = useState(null);
    const isFormValid = IsFormValid(data);
    const inputRef = useRef(null);

    const randomQuote = async () => {
        const response = await axios.get(import.meta.env.VITE_API, {
            headers: {
                'X-Api-Key': import.meta.env.VITE_KEY
            }
        });
        setQuote(response.data[0].quote);
    }
    
    const handleChange = (e) => {
        const { name, value } = e.target
        setData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    
    const handleClear = () => {
        setData({
            name: '',
            age: '',
            email: '',
            phone: '',
            gender: '',
            address: '',
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!isFormValid) return
        navigate('/profile')
    }
    
    useEffect(() => {
        randomQuote();
        inputRef.current.focus();
    }, []);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
            <div className='p-4 flex justify-center font-extrabold text-2xl'>QUOTE</div>
            <div className='px-28 pb-8 flex justify-center text-center'>{quote}</div>
            <form onSubmit={handleSubmit} className="w-[600px] border-2 rounded-2xl shadow-2xl p-6 bg-white space-y-1">
                <label className="block">
                    Name: <input ref={inputRef} type="text" name="name" value={data.name} onChange={handleChange} className="w-full p-2 border rounded" />
                </label>

                <label className="block">
                    Age: <input type="number" name="age" value={data.age} onChange={handleChange} className="w-full p-2 border rounded" />
                </label>

                <label className="block">
                    Email: <input type="email" name="email" value={data.email} onChange={handleChange} className="w-full p-2 border rounded" />
                </label>

                <label className="block">
                    Phone: <input type="number" name="phone" value={data.phone} onChange={handleChange} className="w-full p-2 border rounded" />
                </label>

                <label className="block">
                    Address: <textarea name="address" value={data.address} onChange={handleChange} className="w-full p-2 border rounded" />
                </label>

                <div>
                    Gender:
                    <label className="ml-2">
                        <input type="radio" name="gender" value="male" checked={data.gender === 'male'} onChange={handleChange} /> Male
                    </label>
                    <label className="ml-2">
                        <input type="radio" name="gender" value="female" checked={data.gender === 'female'} onChange={handleChange} /> Female
                    </label>
                    <label className="ml-2">
                        <input type="radio" name="gender" value="other" checked={data.gender === 'other'} onChange={handleChange} /> Other
                    </label>
                </div>


                <div className="flex justify-between mt-4">
                    <button type="button" onClick={handleClear} className="bg-red-400 text-white px-4 py-2 rounded-md shadow hover:bg-red-500" >
                        Clear
                    </button>
                    <button type="submit" disabled={!isFormValid} className={`px-4 py-2 rounded-md shadow text-white ${isFormValid ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-400 cursor-not-allowed'}`} >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}


export default Form
