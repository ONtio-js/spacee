import axios from "axios";
import { createContext, useEffect, useLayoutEffect, useState } from "react";

export const UserContext = createContext({});

export function UserContextProvider({children}) {
    const [auth,setAuth] = useState(false);
    const [user,setUser] = useState(null);
    const [ready,setReady] = useState(false);
    const [open, setOpen] = useState(false);  
    useEffect(() => {
        if(!user && !auth){
            axios.get('/profile').then(({data}) => {
                setUser(data);
                setReady(true);
            });
        }
    },[user]);

    return (
        <UserContext.Provider value ={{user,setUser,setAuth,ready,open,setOpen}}>
            {children}
        </UserContext.Provider>
    )
}