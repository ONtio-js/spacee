import axios from "axios";
import cookie from 'js-cookie';
import { useState } from "react"
import { Link, Navigate } from "react-router-dom";

export default function VerificationPage() {
    const [token, setToken] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [redirect, setRedirect] = useState(false);
    const signupToken = cookie.get('signUpToken');
    async function verify(e) {
        e.preventDefault();
        try {
            if(!token){
                setErrorMessage('Token is required');
                return;
            } 
            const { data } = await axios.patch('/email-verification', { token });
            console.log(data);
            if (data.status === 'failure') {
                setMessage('');
                setErrorMessage(data.message);
            } else {
                setMessage(data.message);
                setErrorMessage('')
                setTimeout(setRedirect(true), 5000);
            }
        } catch (error) {
            // console.log({ message: error.message });
        }
    }

    return (
        <><div className="mt-48 px-4" >
            <div className="">
                {redirect && (
                    <Link to={'/login'} className="bg-primary text-white font-semibold px-5 py-2 rounded-md  ">Proceed to Login</Link>
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
                            onChange={e => {setToken(e.target.value); setErrorMessage('')}}
                            className="text-center font-semibold" />

                    </div>
                    <button className="mt-4 primary capitalize font-semibold text-lg">verify</button>
                    <p className="mt-4 text-center text-gray-700">didn't recieve the code? <span className=" text-black underline cursor-pointer">Resend</span></p>
                </form>

            </div>
        </div>
        </>
    )
}