import { useContext, useEffect, useState } from "react";
import {Link, Navigate} from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext";
import { Apple, Google, facebook } from "../assets/img";


export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [message, setMessage] = useState('');
    const{user,setUser,setReady} = useContext(UserContext)
    async function loginHandler(ev){
        ev.preventDefault();

        try {
            if(!email){
                setMessage("Please enter your email address")
            }else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
                setMessage("Please enter valid email address")
            }else if(!password){
                setMessage("Please enter your password")
            }else{
                const {data} = await axios.post('/login', {email,password});
                console.log(data);
                setUser(data);
                 setRedirect(true);
            }
        
        } catch (error) {
            console.log("Error: " + error);
        }
       console.log(message);
    }
    if(user){
        return <Navigate to={'/'} />;
    }
    if(redirect) {
        return <Navigate to={'/account'} />;
    }
    return (
        <div className="min-h-screen mt-4 grow flex justify-around items-center">
        <div className="-mt-32 px-10" >
        <form className="max-w-md mx-auto" onSubmit={loginHandler}>
                <h1 className="text-4xl text-center mb-4">Login</h1>
                <input type="email" 
                placeholder={'Example@mail.com'}
                 value={email}
                 onChange={e => setEmail(e.target.value)} />
                <input type="password"
                  placeholder={'Password'}
                  value={password}
                  onChange={e => setPassword(e.target.value)} />
                <button className="primary">Login</button>
                <div className="mt-5">
                        <h1 className="text-gray-500 text-center capitalize">sign-in with</h1>
                        <div className="flex items-center gap-5 justify-center py-2">
                            <img src={Google} alt="google_login" className="w-8 h-8 cursor-pointer" />
                            <img src={facebook} alt="google_login" className="w-10 h-10 cursor-pointer" />
                            <div className="border rounded-full"><img src={Apple} alt="google_login" className="w-10 h-10 cursor-pointer" /></div>
                        </div>
                    </div>
                <div className="text-center py-2 text-gray-500">
                    Don't have account yet? 
                     <Link to="/register" className="underline text-black capitalize"> sign up</Link>
                </div>
            </form>
        </div>
        </div>
    );
}