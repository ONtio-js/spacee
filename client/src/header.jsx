import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./context/userContext"
import AuthModal from "./pages/AuthSync";
import Logo from "./components/Logo";
export default function Header() {
  const { user, open, setOpen } = useContext(UserContext)
  const [searchToggle,setSearchToggle] = useState(false);
  return (
    <header className=' fixed top-0 w-full z-50 bg-white flex justify-between border-b-2 pb-4 px-4 md:px-10'>
      <Logo />
      <div className='hidden md:flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-200 mt-2' >
        <div>anywhere</div>
        <div className="border-l border-gray-300"></div>
        <div>any week</div>
        <div className="border-l border-gray-300"></div>
        <div>add guest</div>
        <button onClick={() => setSearchToggle(true)} className='bg-primary text-white px-1 rounded-full flex items-center justify-center '><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
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
      <SearchBox open={searchToggle} onclose={() => setSearchToggle(prev => !prev)} />
    </header>
  );
}

const SearchBox = ({open,onclose}) => {
  const [result,setResult] = useState([]);
  const [input,setInput] = useState('');
 const fetchData = (value) =>{
        setResult(value);
 }
 const handleInput = (value) => {
  setInput(value);
  fetchData(value);
 }
  return (
    <div className={`fixed  inset-0 flex justify-center items-center py-20 px-10 transition-all duration-700 w-[100vw] h-[100vh] ${open ? "translate-y-0 bg-black/20" : "translate-y-[100vh]"}`} onClick={onclose}>
    <div onClick={e => e.stopPropagation()} className=" bg-white shadow-md rounded-md max-w-[600px] w-2/3 h-2/3 py-4 transition-all mt-16 p-5 pt-20 flex flex-col gap-6 items-center">
     <h1 className="flex"> <Logo />&trade;</h1>
    <div className="w-full">
    <div className="flex items-center gap-2 border px-4 rounded-[50px] w-full">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      <input type="text" value={input} onChange={(e) => handleInput(e.target.value)} className="border-none" placeholder="search for a house" />
    </div>
    <div className="w-full max-h-[200px] overflow-y-scroll no-scrollbar  p-2  ">
    <ul>
      
        <li className=" py-1 px-2 text-gray-600 mt-1 text-[18px]   bg-gray-50 rounded-[50px]"> {result}</li>
     
      
    </ul>
    </div>
    </div>

    </div>
    
  </div>
  )
}