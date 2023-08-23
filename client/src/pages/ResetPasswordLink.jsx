import axios from 'axios';
import React, { useState } from 'react'
import Loader from '../components/Loader';

const ResetPasswordLink = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email) {
            setError('Please enter your email address');
        } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
            setError('enter a valid email');
        } else {
            try {
                setLoading(true);
                const { data } = await axios.post('/request-password-reset-link', { email });
                if(data.status === 'success'){
                    setSuccess(data.message);
                    setLoading(false);
                }
            } catch (error) {
                setLoading(false);
                if (error.response.status === 404) {
                    setError('Email not registered')
                }
                // console.log(error);
            }
        }
    }
    return (
        <div className='my-auto mx-3'>
           {loading && (
             <Loader />
           )}
            <form className="max-w-md mx-auto bg-gray-100/50 p-10 rounded-2xl  " onSubmit={handleSubmit} >
                <h1 className="text-center text-xl text-gray-700 capitalize mb-4">Enter your email</h1>
                {error && (
                    <div className="text-center bg-red-600/10 rounded-[10px] font-medium py-2 text-red-600">
                    {error}
                </div>
                )}
                {success && (
                    <div className="text-center bg-green-600/10 rounded-[10px] font-medium py-2 text-green-600">
                    {success}
                </div>
                )}
                <div>
                    <input type="email"
                        placeholder="Enter your email address"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value);setError('');setSuccess('')}}
                        className="text-center " />

                </div>
                <button className="mt-4 primary capitalize font-semibold text-lg">submit</button>
            </form>
        </div>
    )
}

export default ResetPasswordLink