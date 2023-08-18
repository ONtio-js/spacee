import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Booking from "./Booking";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
export default function PlacePage() {
    const [place, setPlace] = useState();
    const [showAllphotos, setShowAllPhotos] = useState(false);
    const { id } = useParams();
    const { user } = useContext(UserContext);
    useEffect(() => {
        if (!id) {
            return;
        };
        axios.get('/places/' + id).then((response) => {
            setPlace(response.data);
        })
    }, [id]);
    if (!place) return;
    if (showAllphotos) {
        return (
            <div className="absolute inset-0 bg-gray-700 min-w-full min-h-screen">
                <button onClick={() => setShowAllPhotos(false)} className="fixed bg-slate-900 text-pink-500  top-4 left-8 p-2 rounded-full" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>

                </button>
                <div className="bg-gray-700 p-8 grid gap-4 mt-8">
                    <h1 className="text-white text-center text-2xl">photos of {place.title}</h1>
                    {place.image.length > 0 && place.image.map(imag => (
                        <div>
                            <img src={`${config.production.baseurl}/controller/images/${imag}`} alt="" srcSet="" />

                        </div>
                    ))}
                </div>
            </div>
        )
    }
    return (
        <>
            <div className="my-10 py-6 px-10  bg-gray-50">
                <h1 className="text-2xl">{place.title}</h1>
                <div className="">
                    <a className="flex items-center gap-1 font-semibold underline my-2 " target="_blank" href={'https://maps.google.com?q=' + place.addresses}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#FF55BB" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>{place.addresses}</a>
                </div>
                <div className=" ">
                    <div className="grid gap-2 grid-cols-[2fr_1fr] rounded-3xl overflow-hidden">
                        <div>
                            <img onClick={() => setShowAllPhotos(true)} className="aspect-square" src={`http://localhost:8080/controller/images/${place.image[0]}`} alt="" srcSet="" />
                        </div>
                        <div className="grid gap-2">
                            <div>
                                <img onClick={() => setShowAllPhotos(true)} className="aspect-square" src={`http://localhost:8080/controller/images/${place.image[1]}`} alt="" srcSet="" />
                            </div>
                            <div className="overflow-hidden">
                                <img onClick={() => setShowAllPhotos(true)} className="aspect-square object-cover relative -top-2" src={`http://localhost:8080/controller/images/${place.image[2]}`} alt="" srcSet="" />
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <button className=" flex gap-2 absolute bottom-5 right-2 py-2 px-4 rounded-xl bg-white  shadow-sm shadow-gray-500" onClick={() => setShowAllPhotos(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                            </svg>
                            Photos</button>
                    </div>
                </div>

                <div className="grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr] mt-4">

                    <div>
                        <div className="mb-4">
                            <h2 className="font-semibold text-2xl pt-2 ">Description</h2>
                            {place.Description}
                        </div>
                        <span className="font-semibold">check-in:</span> {place.checkIn}:00<br />
                        <span className="font-semibold">check-out:</span>  {place.checkOut}:00<br />
                        <span className="font-semibold">maximum number of guest:</span> {place.maxGuests}
                        <div className="text-sm text-gray-700 mt-4 leading-4">
                            <h2 className="capitalize text-xl font-semibold text-black mb-2">Extra information</h2>
                            {place.extraInfo}
                        </div>
                    </div>
                    {user && (
                        < Booking place={place} />
                    )}

                </div>
            </div>
        </>
    )
}
