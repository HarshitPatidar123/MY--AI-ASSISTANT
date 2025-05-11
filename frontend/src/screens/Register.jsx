import React, { useState ,useContext} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import axios from '../config/axios'


const Register=()=>{

  const [email, setEmail] = useState('')
  const [ password, setPassword ] = useState('')

  const {setUser}=useContext(UserContext)  
  const navigate = useNavigate()

  
  function submitHandler(e) {

    e.preventDefault()

    axios.post('/users/register', {
        email,
        password
    }).then((res) => {
        console.log(res.data)

        localStorage.setItem('token', res.data.token)
        setUser(res.data.user)

        navigate('/')
    }).catch((err) => {
        console.log(err.response.data)
    })
}

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f172a]">
      <div className="bg-[#1e293b] p-8 rounded-xl shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">Register</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
            onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              className="w-full px-4 py-2 rounded bg-[#334155] text-white border border-[#475569] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <input
            onChange={(e) => setPassword(e.target.value)} 
              type="password"
              id="password"
              className="w-full px-4 py-2 rounded bg-[#334155] text-white border border-[#475569] focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded transition duration-200"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-400">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register