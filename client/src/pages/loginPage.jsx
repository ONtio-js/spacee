import { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext";
import { Apple, Google, facebook } from "../assets/img";
import Loader from "../components/Loader";


export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const { user, setUser, setAuth } = useContext(UserContext)
    async function loginHandler(ev) {
        ev.preventDefault();

        try {
            if (!email) {
                setMessage("Please enter your email address")
            } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setMessage("Please enter valid email address")
            } else if (!password) {
                setMessage("Please enter your password")
            } else {
                setLoading(true);
                const { data } = await axios.post('/login', { email, password });
                console.log(data);
                if (data.status === 'success') {
                    setUser(data.message);
                    setAuth(true);
                    console.log(data);
                    setRedirect(true);
                    setLoading(false);
                } else {
                    setLoading(false);
                    setMessage(data.message);
                }
            }

        } catch (error) {
            setLoading(false);
            if (error.response.status === 400) {
                setMessage('Email not registered')
            }
            if (error.response.status === 403) {
                setMessage('Incorrect password');
            };
        }
    }
    if (user) {
        return <Navigate to={'/'} />;
    }
    if (redirect) {
        return <Navigate to={'/account'} />;
    }
    return (
        <div className="min-h-screen mt-4 grow flex justify-around items-center">
            <div className="-mt-32 px-10" >
                <form className="max-w-md mx-auto " onSubmit={loginHandler}>
                    <h1 className="text-4xl text-center mb-4">Login</h1>
                    {message && (
                        <div className="text-center bg-red-600/10 rounded-[10px] font-medium py-2 text-red-600">
                            {message}
                        </div>
                    )}
                    {loading && (
                        <Loader />
                    )}
                    <input type="email"
                        placeholder={'Example@mail.com'}
                        value={email}
                        onChange={e => { setEmail(e.target.value); setMessage('') }} />
                    <input type="password"
                        placeholder={'Password'}
                        value={password}
                        onChange={e => { setPassword(e.target.value); setMessage('') }} />
                    <button className="primary">Login</button>
                    <div className="mt-5">
                        <h1 className="text-gray-500 text-center capitalize">sign-in with</h1>
                        <div className="flex items-center gap-5 justify-center py-2">
                            <div className="border rounded-full"><img src={Google} alt="google_login" className="w-8 h-8 cursor-pointer" /></div>
                            <div className="border rounded-full"><img src={facebook} alt="google_login" className="w-10 h-10 cursor-pointer" /></div>
                            <div className="border rounded-full"><img src={Apple} alt="google_login" className="w-10 h-10 cursor-pointer" /></div>
                        </div>
                    </div>
                    <div className="text-center py-2 text-gray-500">
                        Don't have account yet?
                        <Link to="/register" className="underline text-black capitalize"> sign up</Link>
                        <p className="text-gray-500">forgot password  <Link to={'/reset-password'} className="text-primary">Reset password</Link></p>
                    </div>
                   
                </form>
            </div>
        </div>
    );
}