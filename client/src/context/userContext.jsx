import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [user,setUser] = useState(null);
    const [ready,setReady] = useState(false);
    const [open, setOpen] = useState(false);  
    useEffect(() => {
        if(!user){
            axios.get('/profile').then(({data}) => {
                setUser(data);
                console.log(user);
                setReady(true);
            });
        }
    },[user]);
    return (
        <UserContext.Provider value ={{user,setUser,ready,open,setOpen}}>
            {children}
        </UserContext.Provider>
    )
}