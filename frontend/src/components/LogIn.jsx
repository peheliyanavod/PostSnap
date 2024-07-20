import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';


const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error,setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
                const result = await axios.post('http://localhost:3001/login', { email, password });
                console.log(result.data);
                if(result.data === 'Successfull'){
                    navigate('/home')
                }
                if(result.data === 'Incorrect password' || result.data === 'User not found'){
                    console.log('Invalid credentials');
                    setError('Invalid credentials.')
                }
            
        } catch (error) {
            console.error(error);
            setError('Fail to login, Please try again.')
        }
    }

  return (
    <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
        <div className='bg-white p-8 max-w-md w-full shadow-lg rounded'>
        <h1 className='mb-6 text-2xl font-bold text-center'>Log In</h1>
        {(error)&&(
                    <div className='bg-red-100 text-red-700 p-4 mb-4 rounded'>
                        {error}
                    </div>
                )}
            <form onSubmit={handleSubmit} className='space-y-4'>
                
                <div>
                    <label htmlFor="email" className='text-sm font-medium text-gray-700 block'>Email</label>
                    <input 
                    type="email" 
                    name='email' 
                    placeholder='Enter the Email' 
                    required
                    onChange={(e)=>{setEmail(e.target.value)}} 
                    className='mt-1 p-2 w-full border border-gray-300 rounded'
                    />
                </div>

                <div>
                    <label htmlFor="password" className='text-sm font-medium text-gray-700 block'>Password</label>
                    <input 
                    type="password" 
                    name='password' 
                    placeholder='Enter the password' 
                    required
                    onChange={(e)=>{setPassword(e.target.value)}} 
                    className='mt-1 p-2 w-full border border-gray-300 rounded'
                    />
                </div>

                <div>
                    <button type='submit' className='bg-green-500 w-full py-2 text-white font-bold rounded hover:bg-green-700'>Log In</button>
                </div>

            </form>

            <div className='mt-4 text-center flex'> 
                <p>Create an account?</p>
                <Link to="/register" className='text-blue-500 hover:text-blue-700'>Register</Link>
            </div>
        </div>
    </div>
  )
}

export default LogIn;