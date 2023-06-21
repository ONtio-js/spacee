import axios from "axios";
import Perks from "./Perks";
import { useEffect, useState } from "react";
import UploadImage from "./UploadImage";
import NavLinks from "./NavLinks";
import { Navigate, useParams } from "react-router-dom";
export default function FormPage(){
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [Description, setDescription] = useState('');
    const [extraInfo, setExtraInfo] = useState('');
    const [addedPhoto,setAddedPhoto] = useState([]);
    const [perks, setPerks] = useState([]);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [maxGuests, setMaxGuests] = useState(1);
    const [redirect, setRedirect] = useState('');
    const [price, setPrice] = useState(100);
    function setHeading(data1){
        return (
        <h2 className="text-xl mt-4">{data1}</h2>
        );
    }
    function setParagraph(data1){
        return (
        <p className="text-gray-500 text-sm">{data1}</p>
        );
    }
    function inputSet(heading,paragraph){
        return(
            <>
            {setHeading(heading)}
            {setParagraph(paragraph)}
            </>
        );
    }
    
    useEffect(() => {
        if(!id){
            return;
        }
        axios.get('/places/' + id).then((response) => {
            const {data} = response;
            setTitle(data.title);
            setDescription(data.Description);
            setAddress(data.addresses);
            setAddedPhoto(data.image);
            setExtraInfo(data.extraInfo);
            setCheckIn(data.checkIn);
            setCheckOut(data.checkOut);
            setMaxGuests(data.maxGuests);
            setPerks(data.perks);
            setPrice(data.price);
        })
    },[id]);
    console.log(price);
    async function savePlace(ev){
        ev.preventDefault();
        const data = {
            title,Description,address,
            addedPhoto,extraInfo,perks,
            checkIn,checkOut,maxGuests,price
        }
        if(id){
            await axios.put('/places/'+id,data);
            setRedirect('/account/places');
        }else{
            await axios.post('/place', data);
            setRedirect('/account/places')
        }
     
    }
    if(redirect){
        return <Navigate to={redirect} />;
    }
    return (
        <>
        < NavLinks />
         <form className="px-8 mb-20" onSubmit={savePlace}>
                        {inputSet('title', 'title for your place, should be shorty and appealing')}
                        <input type="text"
                            placeholder="title  for example: My exquisite Apartment"
                            value={title}
                            onChange={e => setTitle(e.target.value)} />
                                 {inputSet('address', 'Address to this Place')}
                        <input type="text"
                            placeholder="Address"
                            value={address}
                            onChange={e => setAddress(e.target.value)} />
                            < UploadImage addedPhoto = {addedPhoto} onChange = {setAddedPhoto}/>
                        {inputSet('Description', 'Say more about the place')}
                        <textarea
                            placeholder="Description about the area..."
                            value={Description}
                            onChange={e => setDescription(e.target.value)} />
                                   {inputSet('Perks', 'List all perks that makes your listing stands out')}   
                        < Perks selected={perks} onChange={setPerks} />
                        {inputSet('Extra Information', 'More information about the area more like house rules, etc')} 
                        <textarea placeholder="Extra information about the area..."
                            value={extraInfo}
                            onChange={e => setExtraInfo(e.target.value)} />
                                           {inputSet('Check-In and Check-Out Time', 'input the check in and check out time, Remember to take time for cleaning into considerationc')} 
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                            <div>
                                <h3 className="mt-2 ">check in time</h3>
                                <input type="text"
                                    placeholder="14:00"
                                    value={checkIn}
                                    onChange={e => setCheckIn(e.target.value)} />
                            </div>
                            <div>
                                <h3 className="mt-2">check out time</h3>
                                <input type="text"
                                    placeholder="18:00"
                                    value={checkOut}
                                    onChange={e => setCheckOut(e.target.value)} />
                            </div>
                            <div>
                                <h3 className="mt-2 ">Max Number of guest</h3>
                                <input type="number"
                                    placeholder="10"
                                    value={maxGuests}
                                    onChange={e => setMaxGuests(e.target.value)} />
                            </div>
                            <div>
                                <h3 className="mt-2 ">Price Per nightt</h3>
                                <input type="number"
                                    placeholder="100"
                                    value={price}
                                    onChange={e => setPrice(e.target.value)} />
                            </div>
                        </div>
                        <div className="text-center">
                            <button className="primary my-4 max-w-sm" type="submit">Save</button>
                        </div>
                    </form>
        </>
    )
}