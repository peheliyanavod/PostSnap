import {useState} from 'react'
import { Link } from 'react-router-dom';

const LogIn = () => {
  return (
    <div className='bg-gray-300 m-10 p-10 max-w-md mx-auto mt-10'>
        <h1 className='mb-5'>Log In</h1>
        <div>
            <form action="onSubmit">
                
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name' placeholder='Enter the name' className='m-1'/>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email' placeholder='Enter the Email' />
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" name='password' placeholder='Enter the password' />
                </div>

                <div>
                    <button className='bg-green-500'>Log In</button>
                </div>

            </form>

            <div>
                <p>Create an account?</p>
                <Link to="/register" className='bg-blue-500 rounded p-2'>Register</Link>
            </div>
        </div>
    </div>
  )
}

export default LogIn;