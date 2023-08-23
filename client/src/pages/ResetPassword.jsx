import axios from 'axios';
import React,{useState} from 'react'
import Loader from '../components/Loader';
import { useParams } from 'react-router-dom';
const ResetPassword = () => {
        const [password, setPassword] = useState('');
        const [confirmPassword, setConfirmPassword] = useState('');
        const [error, setError] = useState('');
        const [loading, setLoading] = useState(false);
        const [success, setSuccess] = useState('');
        const {id} = useParams();
        const handleSubmit = async (e) => {
            e.preventDefault();
            if (!password) {
                setError('Please enter Password');
            } else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)) {
                setError('password must contain  at least one uppercase, lowercase,number and special character');
            }else if(!confirmPassword){
                setError('confirm your password');
            }else if (password !== confirmPassword){
                setError('password mistmatch!');
            } else {
                try {
                    setLoading(true);
                    const { data } = await axios.patch('/reset-password', { newPassword:password, id });
                    if(data.status === 'success'){
                        setLoading(false);
                        setSuccess(data.message);
                    }

                } catch (error) {
                    setLoading(false);
                    console.log(error);
                    if (error.response.status === 400) {
                        setError('Email not registered')
                    }
                }
            }
        }
    return (
        <div className='my-auto mx-3'>
           {loading && (
             <Loader />
           )}
            <form className="max-w-md mx-auto bg-gray-100/50 p-10 rounded-2xl  " onSubmit={handleSubmit} >
                <h1 className="text-center text-xl text-gray-700 capitalize mb-4">Reset your password</h1>
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
                    <input type="password"
                        placeholder="Enter new Password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value);setError('')}}
                        className="text-center " />
                          <input type="password"
                        placeholder="Confirm new password"
                        value={confirmPassword}
                        onChange={(e) => {setConfirmPassword(e.target.value);setError('')}}
                        className="text-center " />

                </div>
                <button className="mt-4 primary capitalize font-semibold text-lg">submit</button>
            </form>
        </div>
    )
}

export default ResetPassword