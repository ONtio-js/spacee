import { useContext, useEffect, useState } from "react"
import {differenceInCalendarDays} from "date-fns";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { UserContext } from "../context/userContext";

export default function Booking({place}) {
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState('');
    const [fullname, setFullname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [redirect, setRedirect] = useState('');
    const {user} = useContext(UserContext);
    useEffect(() => {
        if(user){
            setFullname(user.name);
            setEmail(user.email);
        }
    },[user])
    let numberofNights = 0;
    if(checkIn && checkOut){
        numberofNights = differenceInCalendarDays(new Date(checkOut), new Date(checkIn));
    }
    async function Reserve(){

        const bookingData = await axios.post('/bookings',{checkIn,checkOut,fullname,email,phone,place: place._id,
            price:numberofNights * place.price,maxGuests});
        const bookingId = bookingData.data._id;
        setRedirect(`/account/bookings/${bookingId}`);

    }
    if(redirect){
        return <Navigate to={redirect} />;
    }
    return (
        <>
            <div>
                <div className="bg-gray-100 p-4 rounded-2xl mt-4">
                    <span className="font-semibold text-center block">price: ${place.price}/ per Night</span>
                    <div className="border rounded-2xl bg-gray-50 mt-4">
                        <div className="flex">
                            <div className="py-4 px-3">
                                <label htmlFor="">check-in</label>
                                <input type="date" 
                                value={checkIn}
                                onChange={e => setCheckIn(e.target.value)}
                                className="w-2/3 "/>
                            </div>
                            <div className="py-4 border-l-2 px-3">
                                <label htmlFor="">check-out</label>
                                <input type="date" 
                                value={checkOut}
                                onChange={e => setCheckOut(e.target.value)}
                                className="w-2/3 "/>
                            </div>
                        </div>
                        <div className="py-4 px-3 text-center border-t-2">
                            <label htmlFor="">Max Number of guest</label>
                            <input type="number"
                             value={maxGuests} 
                            onChange={e => setMaxGuests(e.target.value)}
                             className="text-center"/>
                        </div>
                        {numberofNights > 0 && (
                           <div className="px-4 capitalize bg-gray-100 shadow rounded-2xl py-3">
                           <label htmlFor="">your full name</label>
                           <input type="text"
                            value={fullname} 
                           onChange={e => setFullname(e.target.value)}
                            className="text-center"/>
                            <label htmlFor="">Email</label>
                           <input type="email"
                            value={email} 
                           onChange={e => setEmail(e.target.value)}
                            className="text-center"/>
                             <label htmlFor="">Phone</label>
                           <input type="tel"
                            value={phone} 
                           onChange={e => setPhone(e.target.value)}
                            className="text-center"/>
                       </div> 
                        )}
                    </div>

                    <button onClick={Reserve}  className="primary text-xl mt-2 capitalize">
                        Reserve a place</button>
                </div>
            </div>
            </>
    )
}