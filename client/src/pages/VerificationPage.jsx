import axios from "axios";
import { useState } from "react"
import { Navigate } from "react-router-dom";

export default function VerificationPage(){
    const [token, setToken] = useState('');
    async function verify(){
        const verify = await axios.post('/verification', { token: token});
        if(verify){
            return <Navigate to={'/login'} />
        }
    }
    return (
        <><div className="mt-48 px-4" >
            <div className="">
                <form className="max-w-md mx-auto bg-gray-100/50 p-10 rounded-2xl  " onSubmit={verify} >
                    <h1 className="text-center text-xl text-gray-700 capitalize mb-4">Confirm your email</h1>
                    <div>
                        <input type="text" 
                        placeholder="Enter OTP"
                        value={token} 
                        onChange={e => setToken(e.target.value)} />
                        
                    </div>
                    <button className="mt-4 primary capitalize font-semibold text-lg">verify</button>
                    <p className="mt-4 text-center text-gray-700">didn't recieve the code? <span className=" text-black underline cursor-pointer">Resend</span></p>
                </form>
               
            </div>
        </div>
        </>
    )
}