import {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

const SignUp = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault;
        try{
            const result = await axios.post('',{name,email,password});
            console.log(result.data);  
        }
        catch(error){
            console.log( error);
        }
    }

  return (
    <div className='bg-gray-300 m-10 p-10 max-w-md mx-auto mt-10'>
        <h1 className='mb-5'>Sign Up</h1>
        <div>
            <form onSubmit={handleSubmit}>
                
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='Enter the name' className='m-1' onChange={(e)=>{setName(e.target.value)}}/>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Enter the Email' onChange={(e)=>{setEmail(e.target.value)}}/>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Enter the password' onChange={(e)=>{setPassword(e.target.value)}}/>
                </div>

                <div>
                    <button type='submit' className='bg-green-500'>Register</button>
                </div>

            </form>

            <div>
                <p>Already have an account?</p>
                <Link to="/login" className='bg-blue-500 rounded p-2'>Log In</Link>
            </div>
        </div>
    </div>
  )
}

export default SignUp