import { useEffect, useState } from "react";
import NavLinks from "./NavLinks";
import axios from "axios";
import PlaceImage from "./placeImage";
import { differenceInCalendarDays, format } from "date-fns";
import { Link } from "react-router-dom";
export default function BookingsPage() {
    const [Bookings, setBookings] = useState([]);
    useEffect(() => {
        axios.get('/user-bookings').then((response) => {
            setBookings(response.data);
        })
    }, []);
    return (
        <>
            <div className="sm:px-2 md:px-10 lg:grid-cols-2 ">
                <NavLinks />
                <div className="lg:grid grid-cols-2 gap-4 mt-8">
                    {Bookings.length > 0 && Bookings.map((booking) => (
                        <div className="flex  gap-4 bg-gray-50 rounded-2xl my-2 p-2">
                            <div className="w-48">
                                < PlaceImage place={booking.place} />
                            </div>

                            <div className="py-2 capitalize grow " key={booking._id}>
                                <h2 className="text-md font-semibold">{booking.place.title}</h2>
                                <div className=" flex items-center gap-2 border-t mt-2 py-2 border-gray-700">
                                    <div className="flex gap-1 items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                        </svg>

                                        {format(new Date(booking.checkIn), 'dd-MM-yyyy')} </div>
                                    <span className="">
                                        &rarr; </span>
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
                                        </svg>

                                        {format(new Date(booking.checkOut), 'dd-MM-yyyy')}
                                    </div>

                                </div>
                                <div className=" capitalize font-semibold">
                                    <div className="flex text-gray-500 gap-2 items-center">

                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                                        </svg>

                                        {differenceInCalendarDays(new Date(booking.checkOut), new Date(booking.checkIn))} Nights
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                        </svg>


                                     <span className="text-xl">
                                     total Price: ${booking.price}
                                     </span>
                                    </div>
                                    <Link to={'/account/bookings/'+ booking._id} className="text-primary cursor-pointer">proceed to payment <span></span></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                
                </div>
            </div>
        </>
    )
}