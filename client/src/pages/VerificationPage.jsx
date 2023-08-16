import axios from "axios";
import { useState } from "react"
import { Link, Navigate } from "react-router-dom";
import Loader from "../components/Loader";

export default function VerificationPage() {
    const [token, setToken] = useState('');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function verify(e) {
        e.preventDefault();
        setErrorMessage('');
        setMessage('');
        try {
            if(!token){
                setErrorMessage('Token is required');
                return;
            } 
            setLoading(true);
            const { data } = await axios.patch('/email-verification');
            if (data.status === 'failure') {
                setMessage('');
                setErrorMessage(data.message);
            } else {
                setLoading(false);
                setMessage(data.message);
                setErrorMessage('')
                setTimeout(setRedirect(true), 5000);
            }
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    }
    const resendLink = async () => {
        setMessage('');
        setErrorMessage('');
        try {
            const { data } = await axios.post('/email-verification-request');
            if(data.status === 'success'){
                setMessage(data.message);
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <><div className="mt-48 px-4" >
            <div className="">
                {redirect? (
                    <Link to={'/login'} className="bg-primary text-white font-semibold px-5 py-2 rounded-md  ">Proceed to Login</Link>
                ):(
                    <p className="text-center mb-2 text-[18px]">check your mail for verification OTP</p>
                )}
                <form className="max-w-md mx-auto bg-gray-100/50 p-10 rounded-2xl  " onSubmit={verify} >
                    <h1 className="text-center text-xl text-gray-700 capitalize mb-4">Confirm your email</h1>
                    {message && (
                        <div className="text-center text-lg py-1 text-green-600 capitalize bg-green-600/20 rounded-[10px]">{message}</div>
                    )}
                    {errorMessage && (
                        <div className="text-center text-lg py-1 text-red-600 capitalize bg-red-600/20 rounded-[10px]">{errorMessage}</div>
                    )}
                    <div>
                        <input type="text"
                            placeholder="Enter OTP"
                            value={token}
                            onChange={e => {setToken(e.target.value); setErrorMessage('');setMessage('')}}
                            className="text-center font-semibold" />

                    </div>
                    <button className="mt-4 primary capitalize font-semibold text-lg">verify</button>
                    <p className="mt-4 text-center text-gray-700">didn't recieve the code? <span className=" text-black underline cursor-pointer" onClick={resendLink}>Resend</span></p>
                </form>

            </div>
        </div>
        </>
    )
}