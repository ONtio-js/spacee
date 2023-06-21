import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/userContext"
import {  Navigate, useParams } from "react-router-dom";
import axios from "axios";

import NavLinks from "./NavLinks";


export default function ProfilePage() {
  const { ready, user, setUser } = useContext(UserContext);
if(!ready){
  return <Navigate to={'/'} />;
}
  return (
    <div>
      < NavLinks />
        <div className="grid grid-cols-[2fr_1fr] mt-4 px-10">
          <div className="bg-gray-50  flex items-center justify-center p-8 ">
            <div className="">
            <div className="w-40 h-40 bg-gray-200 rounded-full">
              <img src={user?.image} alt="" srcSet="" />
            </div>
            <div>
              <h2 className="text-2xl text-gray-900 capitalize font-semibold">{user?.name}</h2>
              <h2 className="text-lg text-gray-600">{user?.email} </h2>
              <h2 className="text-xl text-gray-600">{user?.address} </h2>
              <h2 className="text-xl text-gray-600">{user?.phone} </h2>
            </div>
            </div>
            <div>
              {/* TODO: list all well performing listing a user have */}
            </div>
          </div>
          <div>hello</div>

          {/* Logged in as {user?.name} ({user?.email})
          <button onClick={logout} className="primary max-w-sm mt-4">Logout</button> */}
        </div>
      
      
    </div>
  )
}