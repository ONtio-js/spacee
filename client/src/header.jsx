import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./context/userContext"
import AuthModal from "./pages/AuthSync";
export default function Header() {
  const { user, open, setOpen } = useContext(UserContext)

  return (
    <header className=' fixed top-0 w-full z-50 bg-white flex justify-between border-b-2 pb-4 px-4 md:px-10'>
      <Link to={"/"} href="" className='flex items-center gap-1 '>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#FF55BB" className="w-8 h-8">
          <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
          <path fillRule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clipRule="evenodd" />
        </svg>
        <span className='font-bold text-xl text-gray-700'>spacee</span>
      </Link >
      <div className='hidden md:flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-200 mt-2' >
        <div>anywhere</div>
        <div className="border-l border-gray-300"></div>
        <div>any week</div>
        <div className="border-l border-gray-300"></div>
        <div>add guest</div>
        <button className='bg-primary text-white px-1 rounded-full'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        </button>
      </div>

      <div className={!user ? 'relative mt-2  flex item-center  border border-gray-300 rounded-full py-2 px-2' : "relative flex mt-2 gap-1 item-center  border border-gray-300 rounded-full py-2 px-2"} >
        <svg onClick={() => setOpen(prev => !prev)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <Link to={user ? '/account' : '/login'} className={!user ? "hidden" : 'bg-gray-500  text-white rounded-full border border-gray-500 overflow-hidden'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative top-1">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />

          </svg>
        </Link>
        <span className={!user ? "" : "block absolute w-3 h-3 bg-green-500 right-1 rounded-full "}></span>
      </div>
      < AuthModal open={open} onclose={() => setOpen(prev => !prev)} />
    </header>
  );
}