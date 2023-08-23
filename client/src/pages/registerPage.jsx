import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { Apple, Google, facebook } from "../assets/img";
import Loader from '../components/Loader';

export default function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [loadings, setLoading] = useState(false);
    async function registerUser(ev) {
        ev.preventDefault();
        if(!name && !email && !password){
            setErrorMessage('all fields are required');
        }else if(!name){
            setErrorMessage('name is required');
        }else if (!email){
            setErrorMessage('email is required');
        }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            setErrorMessage('enter a valid email address');
        }else if(!password){
            setErrorMessage('Password is required');
        
        }else if (!/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(password)){
            setErrorMessage('password must containe at least one uppercase, lowercase,number and special character')
        }else if(password !== confirmPassword){
            setErrorMessage('password must match');
        }
        else{
            setErrorMessage('');
            setLoading(true);
            try {
                const {data} = await axios.post('/register', { password, firstName:name, email, confirmPassword });
                
                setRedirect('/verification');
            
            } catch (error) {
                setLoading(false);
                setErrorMessage(error.response.data.message[0].msg);
            }
        }  
    }
if(redirect){
    return < Navigate to={'/verification'} />;
}
    return (
        <div className=" mt-20 md:mt-4 grow flex justify-around items-center">
            <div className="-mt-32 px-10" >
                <form className="max-w-md mx-auto" onSubmit={registerUser}>
                    <h1 className="text-4xl text-center my-4 capitalize">sign up</h1>
                  {errorMessage && (
                    <div className="text-center text-lg py-1 text-red-600 capitalize bg-red-600/20 rounded-[10px]">{errorMessage}</div>
                  )}
                  {loadings && (
                    <Loader />
                  )}
                    <input type="text"
                        placeholder="Your First Name"
                        name="name"
                        value={name}
                        onChange={ev =>{setErrorMessage('');setName(ev.target.value)} } />

                    <input type="email"
                        placeholder='Example@mail.com'
                        name="email"
                        value={email}
                        onChange={ev => {setEmail(ev.target.value);setErrorMessage('')}} />

                    <input type="password"
                        placeholder='Password'
                        name="password"
                        value={password}
                        onChange={ev => {setPassword(ev.target.value);setErrorMessage('')}} />
                    <input type="password"
                        placeholder='confirm Password'
                        name="password"
                        value={confirmPassword}
                        onChange={ev => {setConfirmPassword(ev.target.value);setErrorMessage('')}} />

                    <button className="primary">Register</button>
                    <div className="mt-5">
                        <h1 className="text-gray-500 text-center capitalize">Register with</h1>
                        <div className="flex items-center gap-5 justify-center py-2">
                           <img src={Google} alt="google_login" className="w-8  h-8 cursor-pointer" />
                           
                            <img src={facebook} alt="google_login" className="w-10 h-10 cursor-pointer" />
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