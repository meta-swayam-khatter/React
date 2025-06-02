import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { FormContext } from '../context/FormContext'

function Profile() {
  const navigate = useNavigate()
  const { data } = useContext(FormContext);

  if (!data) {
    return (
      <div className="text-center mt-10">
        <p>No user data. Please submit the form first.</p>
        <button onClick={() => navigate('/')} className="mt-4 px-4 py-2 bg-blue-400 text-white rounded">Go back</button>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="border p-6 rounded-xl shadow-xl bg-white space-y-4 w-[400px]">
        <h2 className="text-xl font-semibold text-center">{name}</h2>
        <p><strong>Age:</strong> {data.age}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Phone:</strong> {data.phone}</p>
        <p><strong>Gender:</strong> {data.gender}</p>
        <p><strong>Address:</strong> {data.address}</p>
        <div className="text-center">
          <button onClick={() => navigate('/')} className="bg-blue-400 text-white px-4 py-2 mt-4 rounded">Go back</button>
        </div>
      </div>
    </div>
  )
}


export default Profile
