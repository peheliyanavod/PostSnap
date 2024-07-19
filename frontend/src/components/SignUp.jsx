import {useState} from 'react'

const SignUp = () => {
  return (
    <div className='bg-gray-300 m-10 p-10 max-w-md mx-auto mt-10'>
        <h1 className='mb-5'>Sign Up</h1>
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
                    <button className='bg-green-500'>Register</button>
                    <p>Already have an account?</p>
                    <button className='bg-blue-500 rounded p-2'>Log In</button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default SignUp