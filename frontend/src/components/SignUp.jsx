import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error,setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try {
            if (password === confirmPassword) {
                const result = await axios.post('http://localhost:3001/register', { name, email, password });
                console.log(result.data);
                navigate('/login');
            } else {
                console.log('Password does not match');
                setError('Password does not match.');
            }
        } catch (error) {
            console.error(error);
            setError('Fail to register. Please try again.');
        }
    }

    return (
        <div className='bg-gray-100 min-h-screen flex items-center justify-center'>
            <div className='bg-white shadow-lg rounded-lg p-8 max-w-md w-full'>
                <h1 className='text-2xl font-bold mb-6 text-center'>Sign Up</h1>
                {(error)&&(
                    <div className='bg-red-100 text-red-700 p-4 mb-4 rounded'>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                        <input
                            type="text"
                            name='name'
                            placeholder='Enter your name'
                            className='mt-1 p-2 w-full border border-gray-300 rounded'
                            autoComplete='off'
                            required
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                        <input
                            type="email"
                            name='email'
                            placeholder='Enter your email'
                            className='mt-1 p-2 w-full border border-gray-300 rounded'
                            autoComplete='off'
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
                        <input
                            type="password"
                            name='password'
                            placeholder='Enter your password'
                            className='mt-1 p-2 w-full border border-gray-300 rounded'
                            autoComplete='off'
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className='block text-sm font-medium text-gray-700'>Confirm Password</label>
                        <input
                            type="password"
                            name='confirmPassword'
                            placeholder='Confirm your password'
                            className='mt-1 p-2 w-full border border-gray-300 rounded'
                            autoComplete='off'
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type='submit' className='w-full py-2 bg-green-500 text-white font-bold rounded hover:bg-green-700'>Register</button>
                    </div>
                </form>
                <div className='mt-4 text-center'>
                    <p className='text-sm text-gray-600'>Already have an account? <Link to="/login" className='text-blue-500 hover:text-blue-700'>Log In</Link></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp;
