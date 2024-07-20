import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import axios from 'axios';


const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
                const result = await axios.post('http://localhost:3001/login', { email, password });
                console.log(result.data);
                if(result.data === 'Successfull'){
                    navigate('/home')
                }
                if(result.data === 'Incorrect password' || result.data === 'User not found'){
                    console.log('Invalid credentials');
                }
            
        } catch (error) {
            console.error(error);
        }
    }

  return (
    <div className='bg-gray-300 m-10 p-10 max-w-md mx-auto mt-10'>
        <h1 className='mb-5'>Log In</h1>
        <div>
            <form onSubmit={handleSubmit}>
                
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Enter the Email' onChange={(e)=>{setEmail(e.target.value)}} />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Enter the password' onChange={(e)=>{setPassword(e.target.value)}}  />
                </div>

                <div>
                    <button className='bg-green-500'>Log In</button>
                </div>

            </form>

            <div className='flex'> 
                <p>Create an account?</p>
                <Link to="/register" className='bg-blue-500 rounded'>Register</Link>
            </div>
        </div>
    </div>
  )
}

export default LogIn;