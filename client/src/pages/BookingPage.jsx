import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import NavLinks from "./NavLinks";

export default function(){
    const {id} =useParams();
    const [booking, setBooking] = useState();
    useEffect(()=>{
        axios.get('/user-bookings').then((response) => {
            const found = response.data.find(({_id}) => _id === id);
            if(found) {
                setBooking(found);
            }
            
        })
    },[id]);
    if(!booking){return ""};
    return (
        <>
        <div>
            < NavLinks />
            <div className="mt-6 px-10">
                
            </div>
        </div>
        </>
    )
}