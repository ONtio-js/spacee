import { useContext, useEffect, useState } from "react"
import { UserContext } from "../context/userContext"
import { Navigate, redirect, useParams } from "react-router-dom";
import { HiLocationMarker } from 'react-icons/hi';
import { MdVerified, MdEdit, MdOutlineReport } from 'react-icons/md';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { FiMessageSquare } from 'react-icons/fi';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import {RiListIndefinite} from 'react-icons/ri';

import NavLinks from "./NavLinks";
import ProfileEdit from "../components/ProfileEdit";
import config from "../config/config";


export default function ProfilePage() {
  const { ready, user, setUser } = useContext(UserContext);
  const [open,setOpen] = useState(false);
  if (!ready && !user) {
    return <Navigate to={'/'} />;
  }
  return (
    <div className="mb-10 ">
      < NavLinks />
     
      <div className="grid grid-cols-[1.5fr,2fr] lg:w-[70vw] mx-auto rounded-[20px] mt-4 mb-10 px-10 w-full">
        <div className="absolute  right-7 md:right-12 lg:right-[18vw] lg:mt-2 mt-1 bg-gray-400/30 cursor-pointer p-2 rounded-full">
          <span onClick={() => setOpen(prev => !prev)} className="text-primary"><MdEdit /></span>
        </div>
        <div className="shadow-md bg-gray-50 rounded-l-[20px] hidden md:flex flex-col gap-6 items-center justify-center p-4 ">
          <div className="w-52 h-52 bg-gray-200 rounded-[10px]">
            <img src={`${config.development.baseurl}/controller/images/profile/${user?.profileImage}`} alt="user profile" className="h-52 rounded-[10px]" />
          </div>

          <div className="w-full p-2 h-[200px] bg-white/50 flex flex-col  gap-3 rounded-md overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400 ">
            <div className="w-full h-[50px] bg-primary/10 py-2">
              <h1 className="text-center font-semibold text-primary ">Open Reservations</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className=" shrink-0 w-[50px] h-[50px] bg-gray-100 rounded-md">

              </div>
              <div className="flex flex-col  w-[200px]">
                <h1 className=" capitalize text-black/70 font-medium">mumbai city</h1>
                <p className="text-sm truncate">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ducimus rerum quaerat id at vitae!</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className=" shrink-0 w-[50px] h-[50px] bg-gray-100 rounded-md">

              </div>
              <div className="flex flex-col  w-[200px]">
                <h1 className=" capitalize text-black/70 font-medium">mumbai city</h1>
                <p className="text-sm truncate">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ducimus rerum quaerat id at vitae!</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className=" shrink-0 w-[50px] h-[50px] bg-gray-100 rounded-md">

              </div>
              <div className="flex flex-col  w-[200px]">
                <h1 className=" capitalize text-black/70 font-medium">mumbai city</h1>
                <p className="text-sm truncate">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ducimus rerum quaerat id at vitae!</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className=" shrink-0 w-[50px] h-[50px] bg-gray-100 rounded-md">

              </div>
              <div className="flex flex-col  w-[200px]">
                <h1 className=" capitalize text-black/70 font-medium">mumbai city</h1>
                <p className="text-sm truncate">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ducimus rerum quaerat id at vitae!</p>
              </div>
            </div>
          </div>
          <div className="w-full p-2 h-[200px] bg-white/50 flex flex-col  gap-3 rounded-md overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-400">
          <div className="w-full h-[50px] bg-primary/10 py-2">
              <h1 className="text-center font-semibold text-primary ">Closed Reservations</h1>
            </div>
            <div className="flex items-center gap-3">
              <div className=" shrink-0 w-[50px] h-[50px] bg-gray-100 rounded-md">

              </div>
              <div className="flex flex-col  w-[200px]">
                <h1 className=" capitalize text-black/70 font-medium">mumbai city</h1>
                <p className="text-sm truncate">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ducimus rerum quaerat id at vitae!</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className=" shrink-0 w-[50px] h-[50px] bg-gray-100 rounded-md">

              </div>
              <div className="flex flex-col  w-[200px]">
                <h1 className=" capitalize text-black/70 font-medium">mumbai city</h1>
                <p className="text-sm truncate">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ducimus rerum quaerat id at vitae!</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className=" shrink-0 w-[50px] h-[50px] bg-gray-100 rounded-md">

              </div>
              <div className="flex flex-col  w-[200px]">
                <h1 className=" capitalize text-black/70 font-medium">mumbai city</h1>
                <p className="text-sm truncate">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ducimus rerum quaerat id at vitae!</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className=" shrink-0 w-[50px] h-[50px] bg-gray-100 rounded-md">

              </div>
              <div className="flex flex-col  w-[200px]">
                <h1 className=" capitalize text-black/70 font-medium">mumbai city</h1>
                <p className="text-sm truncate">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas ducimus rerum quaerat id at vitae!</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50/50 w-[90vw] md:w-full -ml-4 md:-ml-0 md:pl-10 p-4 rounded-[20px] sm:rounded-r-[20px] flex flex-col gap-8">
          <div className="flex flex-col gap-6 w-full  ">
            <div className="flex items-center md:gap-16 w-full gap-6 border-b-2 pb-3 border-gray-300">
              <div>
                <h1 className="flex mt-3 items-center gap-1 font-bold capitalize text-gray-700 text-lg ">{`${user?.lastName} ${user?.firstName}`} {user?.isVerified && (
                  <span className="text-blue-500 text-sm"><MdVerified /></span>
                )}</h1>
                <h1 className="text-[18px] font-semibold capitalize text-primary/70">{user?.occupation}</h1>
              </div>
              <h1 className="flex items-center gap-1  capitalize text-[18px]"> <span className="text-primary/70 text-2xl"><HiLocationMarker /></span>{user?.address} Abuja</h1>
            </div>
            <div className="">
              <h1 className="capitalize font-medium py-1">user rating</h1>
              <div className="flex items-center gap-2">
                <h1 className="font-bold text-2xl text-gray-700">3.5</h1>
                <span className="flex items-center text-primary/70">
                  <AiFillStar />
                  <AiFillStar />
                  <AiFillStar />
                  <AiOutlineStar />
                  <AiOutlineStar />
                </span>
              </div>
            </div>
            <div className="flex items-center gap-1 justify-around">
              <div className="bg-primary/10 p-2 rounded-md text-primary capitalize flex items-center gap-1"><span className="text-2xl"><FiMessageSquare /> </span> message</div>
              <div className="bg-primary p-2 rounded-md text-white capitalize flex items-center gap-1"><span className="text-2xl"><IoMdCheckmarkCircleOutline /> </span> contacts</div>
              <div className="bg-primary/10 p-2 rounded-md text-primary capitalize flex items-center gap-1"> <span className="text-2xl"><MdOutlineReport /></span>report</div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5 border-b">
              <div className="hover:border-b-2 border-primary/70 hover:bg-primary/5 p-2 flex items-center gap-1"><span className="text-primary/70"><RiListIndefinite/></span> Listings</div>
              <div className="hover:border-b-2 border-primary/70 hover:bg-primary/5 p-2 flex items-center gap-1 "><span className="text-primary/70"><FaUser /></span> About</div>
            </div>
            <div>
              <div className="flex flex-col gap-4 mt-4">
                <h1 className="uppercase font-semibold text-gray-700/70 mt-10">contact information</h1>
                <h1 className="text-primary/70 flex gap-5 items-center"><span className="font-semibold capitalize text-lg text-black/70 w-[20%]">Phone</span>{user?.phone}</h1>
                <h1 className="flex gap-5 items-center"><span className="font-semibold capitalize text-lg text-black/70 w-[20%]">address</span>{user?.homeAddress}</h1>
                <h1 className=" text-primary/70 flex gap-5 items-center"><span className="truncate font-semibold capitalize text-lg text-black/70 w-[20%] ">Email</span>{user?.email}</h1>
                <h1 className="flex gap-5 items-center text-primary/70"><a className="font-semibold capitalize text-lg text-black/70 w-[20%]" href={user?.website}>website</a>{user?.website}</h1>
              </div>
              <div>
                {/* social handles */}
              </div>
            </div>
          </div>
        </div>

      </div>

    <ProfileEdit open={open} onClose={() =>setOpen(prev => !prev)}/>
    </div>
  )
}