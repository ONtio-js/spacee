import { useContext, useState } from "react";
import {Link, Navigate} from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/userContext";


export default function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const{setUser} = useContext(UserContext)
    async function loginHandler(ev){
        ev.preventDefault();
        try {
           const {data} = await axios.post('/login', {email,password});
           setUser(data);
            setRedirect(true);
        } catch (error) {
            console.log("Error: " + error);
        }
       
    }
    if(redirect) {
        return <Navigate to={'/'} />;
    }
    return (
        <div className="mt-4 grow flex justify-around items-center">
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
                <div className="text-center py-2 text-gray-500">
                    Don't have account yet? 
                     <Link to="/register" className="underline text-black"> Register</Link>
                </div>
            </form>
        </div>
        </div>
    );
}