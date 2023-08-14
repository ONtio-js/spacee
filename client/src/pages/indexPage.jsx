import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {MdVerified} from 'react-icons/md';
import ToggglBar from "../components/ToggglBar";
import config from "../config/config";

export default function indexpage() {
  const [places, setPlaces] = useState([]);
  const [addons, setAddons] = useState(false);
 
  useEffect(() => {
    axios.get('/allplaces').then(response => {
     
      setPlaces([ ...response.data]);
    })
  }, [])

  return (
    <>
      <div>
        
        <div className="fixed top-16 mt-2 w-full flex md:gap-4  justify-around bg-gray-50 py-2 md:mx-2 rounded-lg">
          <label className="bg-white p-1 rounded-lg cursor-pointer">
          <input type="hidden" name="free parking lot" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
            </svg>
          </label>
          <label className="bg-white p-1 rounded-lg cursor-pointer">
          <input type="hidden" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
            </svg>
          </label>
          <label className="bg-white p-1 rounded-lg cursor-pointer">
          <input type="hidden" name="free parking lot" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
            </svg>
          </label>
          <label className="bg-white p-1 rounded-lg cursor-pointer">
          <input type="hidden" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
            </svg>
          </label>
          <label className="bg-white p-1 rounded-lg cursor-pointer">
          <input type="hidden" name="free parking lot" />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
            </svg>
          </label>
          <label className="bg-white p-1 rounded-lg cursor-pointer">
          <input type="hidden" name="free parking lot"/>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7.5l16.5-4.125M12 6.75c-2.708 0-5.363.224-7.948.655C2.999 7.58 2.25 8.507 2.25 9.574v9.176A2.25 2.25 0 004.5 21h15a2.25 2.25 0 002.25-2.25V9.574c0-1.067-.75-1.994-1.802-2.169A48.329 48.329 0 0012 6.75zm-1.683 6.443l-.005.005-.006-.005.006-.005.005.005zm-.005 2.127l-.005-.006.005-.005.005.005-.005.005zm-2.116-.006l-.005.006-.006-.006.005-.005.006.005zm-.005-2.116l-.006-.005.006-.005.005.005-.005.005zM9.255 10.5v.008h-.008V10.5h.008zm3.249 1.88l-.007.004-.003-.007.006-.003.004.006zm-1.38 5.126l-.003-.006.006-.004.004.007-.006.003zm.007-6.501l-.003.006-.007-.003.004-.007.006.004zm1.37 5.129l-.007-.004.004-.006.006.003-.004.007zm.504-1.877h-.008v-.007h.008v.007zM9.255 18v.008h-.008V18h.008zm-3.246-1.87l-.007.004L6 16.127l.006-.003.004.006zm1.366-5.119l-.004-.006.006-.004.004.007-.006.003zM7.38 17.5l-.003.006-.007-.003.004-.007.006.004zm-1.376-5.116L6 12.38l.003-.007.007.004-.004.007zm-.5 1.873h-.008v-.007h.008v.007zM17.25 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zm0 4.5a.75.75 0 110-1.5.75.75 0 010 1.5z" />
            </svg>
          </label>
        </div>
       <div className="my-32">
        <ToggglBar switchAddons={() => setAddons(prev => !prev)} />
       <div className="grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-3 lg:grid-cols-4 px-4 md:px-10">
          {places.length > 0? places.map(place => (
            <Link to={'/places/' + place._id} key={place._id} className="bg-gray-50/50 border-b-2 border-gray-400 p-2 rounded-xl">
              <div className="relative bg-gray-500  flex mb-2 rounded-2xl">
                <div className="w-[300px] h-[200px] bg-gray-300 rounded-2xl">
                <img className="rounded-2xl aspect-square" src={config.production.backendUrl+'/controller/images/' + place.image?.[0]} alt="" srcSet="" />
                </div>
                <div className=" absolute left-1 bottom-1 w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center ">
                  <img src={'http://localhost:8080/controller/images/' + place.image?.[1]} alt="" className="rounded-full w-full h-full" />
                  <span className="text-blue-500 absolute top-1 -right-1"><MdVerified/></span>
                </div>
              </div>

              <h3 className="font-bold truncate">{place.addresses}</h3>
              <h2 className="text-sm mt-2">{place.title}</h2>
              <h1><span className="font-bold mt-1">${addons?place.price+17:place.price}</span> per night</h1>
            </Link>

          )):(
            <>
            <div className="absolute mt-10 w-[90%] flex flex-col items-center justify-center h-[50%]">
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="gray" className="w-32 h-32 animate-ping">
          <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
          <path fillRule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clipRule="evenodd" />
        </svg>
        <p className=" mt-20 font-semibold capitalize text-gray-500 text-center">connecting to server.... <br className=""/>please wait</p>
            </div>
            
            </>
          )}

        </div>
       </div>
      </div>
    </>
  );
}