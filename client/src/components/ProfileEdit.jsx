import React, { useState } from 'react'
import PasswordUpdate from './PasswordUpdate';
import axios from 'axios';

const ProfileEdit = ({ open, onClose }) => {
  const [passwordForm, setPasswordForm] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [occupation, setOccupation] = useState('');
  const [address, setAddress] = useState('');
  const [website, setWebsite] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestData = {
      firstName, lastName, email, phone, occupation, homeAddress: address, website
    };

    if (!firstName && !lastName ) {
      setErrorMessage('All fields must be filled in');
    }
    const {data} = await axios.patch('/profile', requestData);
    setSuccessMessage(data.message);
  }
 const handlePhotoUpload = async (ev) => {
  const file = ev.target.file
  const formData = new FormData();
  formData.append('photo',file);
   const {data} = await axios.patch('/profile-image', formData,{
    headers:{
      'Content-Type': 'multipart/form-data'
    }
   }); 
   console.log(data);
 }
  return (
    <div className={`fixed  inset-0  flex justify-center items-center pb-10 sm:py-20 md:px-10 transition-all duration-700 ${open ? "translate-y-0 bg-black/20" : "translate-y-[120vh]"}`} onClick={onClose}>
      <div onClick={e => e.stopPropagation()} className=" bg-white shadow-md rounded-[20px]  h-[80%] w-[95%] md:w-[80%] lg:w-[50%] overflow-y-scroll scrollbar-none transition-all mt-10">
        {!passwordForm ? (
          <form onSubmit={handleSubmit} className='flex flex-col gap-2 p-5 sm:p-10 transition-all delay-300 ease-in-out '>
            <div className='flex items-start  justify-between'>
              <div className='bg-gray-200 w-2/3 md:w-1/3 flex flex-col items-center gap-1 rounded-[10px] '>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-20 h-20 relative top-1">
                  <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />

                </svg>
                <input type="file"  id='file' onChange={handlePhotoUpload} className='let-0 absolute z-1 opacity-0' />
                <label htmlFor="file" className='flex flex-col capitalize cursor-pointer text-center font-semibold bg-gray-300 w-full p-4 pt-1 rounded-b-[10px]'>
                  add picture
                </label>
              </div>
              <div className='z-50'>
                <button className='p-2  font-medium rounded-[4px] capitalize bg-primary/20 text-primary sm:text-base text-[8px]' onClick={() => setPasswordForm(prev => !prev)}>update password</button>
              </div>
            </div>
            <div className='w-full '>
              <div className='flex items-center justify-center my-2'>

                {errorMessage && (
                  <div className='w-full max-w-[400px] bg-red-600/10 p-2 capitalize text-center rounded-[6px] text-red-600'>
                    {errorMessage}
                  </div>
                )}
                {successMessage && (
                  <div className='w-full max-w-[400px] bg-green-600/10 p-2 capitalize text-center rounded-[6px] text-green-600'>
                    {successMessage}
                  </div>
                )}

              </div>
              <div className='flex gap-2 w-full items-center flex-col md:flex-row'>
                <div className='w-full sm:w-1/2'>
                  <label htmlFor="firstname" className='font-medium capitalize'> first name</label>
                  <input
                    type="text"
                    id='firstname'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder='John' />
                </div>
                <div className='w-full sm:w-1/2'>
                  <label htmlFor="lastname" className='font-medium capitalize'> last name</label>
                  <input
                    type="text"
                    id='lastname'
                    placeholder='Doe'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)} />
                </div>
              </div>
              <div>
                <label htmlFor="email" className='font-medium capitalize'> Email</label>
                <input
                  type="email"
                  id='email'
                  placeholder='johndoe@gmail.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor="phone" className='font-medium capitalize'> phone</label>
                <input
                  type="tel"
                  id='phone'
                  placeholder='johndoe@gmail.com'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div>
                <label htmlFor="occupation" className='font-medium capitalize'> occupation</label>
                <input
                  type="text"
                  id='occupation'
                  placeholder='engineer'
                  value={occupation}
                  onChange={(e) => setOccupation(e.target.value)} />
              </div>
              <div>
                <label htmlFor="homeAddress" className='font-medium capitalize'> home Address</label>
                <input
                  type="text"
                  id='homeAddress'
                  placeholder='your address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)} />
              </div>
              <div>
                <label htmlFor="website" className='font-medium capitalize'> website</label>
                <input
                  type="text"
                  id='website'
                  placeholder='your website'
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)} />
              </div>
              <button className='primary font-semibold mt-2 capitalize' type='submit'>update profile</button>
            </div>
          </form>
        ) : (
          <div className=' relative p-5 transition-all delay-300 ease-in-out'>
            <div className='bg-primary/20 w-8 h-8 flex items-center justify-center rounded-full text-2xl absolute right-2 top-2 z-10'>
              <button className='bg-transparent outline-none text-center' onClick={() => setPasswordForm(prev => !prev)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className='flex items-center justify-center mt-4'>
              <div className='p-5 bg-gray-50 w-[90%] md:w-2/3 rounded-[10px]'> <div>
                <label htmlFor="website" className='font-medium capitalize'> current password</label>
                <input type="text" id='website' placeholder='your website' />
              </div>
                <div>
                  <label htmlFor="website" className='font-medium capitalize'> new password</label>
                  <input type="text" id='website' placeholder='your website' />
                </div>
                <div>
                  <label htmlFor="website" className='font-medium capitalize'> confirm password</label>
                  <input type="text" id='website' placeholder='your website' />
                </div>
                <button className='primary mt-2'>submit</button>
              </div>
            </div>

          </div>
        )}
      </div>

    </div>
  )
}

export default ProfileEdit