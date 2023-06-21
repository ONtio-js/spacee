import { Link, Navigate } from "react-router-dom"
import { UserContext } from "../context/userContext";
import { useContext, useState } from "react";
import axios from "axios";
export default function AuthModal({ open, onclose }) {
  const { user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState('');

  async function logout() {
    await axios.post('/logout');
    setUser(null);
    setRedirect('/');
  }
  if (redirect) {
    return <Navigate to={'/'} />;
  }
  // setRedirect('');

  return (
    <>
      <div className={`fixed  inset-0 flex justify-end items-start py-20 px-10 transition-colors ${open ? "visible bg-white/10" : "invisible"}`} onClick={onclose}>
        <div onClick={e => e.stopPropagation()} className=" bg-white shadow-md rounded-2xl  w-56 py-4 transition-all mt-16 ">
          <div className="border-b-2  border-gray-200 py-2 px-4 ">

            <Link to={'/register'} className={user ? "hidden" : "block   text-gray-600  px-2  capitalize"}>
              sign up
            </Link>
            <Link to={'/login'} className={user ? "hidden" : " block   text-gray-600  py-1 px-2"}>
              Login
            </Link>
            <button onClick={logout} className={!user ? "hidden" : " bg-transparent flex gap-1 text-gray-700 hover:text-primary"}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
</svg>Logout
            </button>
           

          </div>
          <div className="py-2 px-4">
          <Link to={'/register'} className={ "block   text-gray-600  px-2 py-1  capitalize"}>
              spacee your home
            </Link>
            <Link to={'/login'} className={ "capitalize block   text-gray-600   px-2 py-1"}>
              help
            </Link>
          </div>
        </div>

      </div>
    </>
  )
}