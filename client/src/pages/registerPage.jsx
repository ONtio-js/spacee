import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";

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
        <div className="mt-4 grow flex justify-around items-center">
            <div className="-mt-32 px-10" >
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <h1 className="text-4xl text-center mb-4">Register</h1>
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
                    <div className="text-center py-2 text-gray-500">
                        Already a member?
                        <Link to="/login" className="underline text-black"> Login</Link>
                    </div>
                </form>
            </div>
        </div>
    );
}