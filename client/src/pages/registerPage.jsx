import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Apple, Google, facebook } from "../assets/img";

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    async function registerUser(ev) {
        ev.preventDefault();
        try {
            await axios.post('/register', { password, name, email, confirmPassword });
            setRedirect('/verification');
        
        } catch (error) {
            alert(error.message);
        }
    }
if(redirect){
    // setRedirect('')
    return < Navigate to={'/verification'} />;
}
    return (
        <div className=" mt-20 md:mt-4 grow flex justify-around items-center">
            <div className="-mt-32 px-10" >
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <h1 className="text-4xl text-center my-4 capitalize">sign up</h1>
                    <input type="text"
                        placeholder="John Doe"
                        name="name"
                        value={name}
                        onChange={ev => setName(ev.target.value)} />

                    <input type="email"
                        placeholder='Example@mail.com'
                        name="email"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)} />

                    <input type="password"
                        placeholder='Password'
                        name="password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)} />
                    <input type="password"
                        placeholder='confirm Password'
                        name="password"
                        value={confirmPassword}
                        onChange={ev => setConfirmPassword(ev.target.value)} />

                    <button className="primary">Register</button>
                    <div className="mt-5">
                        <h1 className="text-gray-500 text-center capitalize">Register with</h1>
                        <div className="flex items-center gap-5 justify-center py-2">
                           <img src={Google} alt="google_login" className="w-8  h-8 cursor-pointer" />
                           
                            <img src={facebook} alt="google_login" className="w-10 h-10 cursor-pointer" />
                            <div className="border rounded-full"><img src={Apple} alt="google_login" className="w-10 h-10 cursor-pointer" /></div>
                        </div>
                    </div>
                    <div className="text-center py-2 text-gray-500">
                        Already a member?
                        <Link to="/login" className="underline text-black"> Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}