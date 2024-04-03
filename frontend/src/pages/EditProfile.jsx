import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; 
import { useAuthContext } from '../hooks/useAuthContext';
import { useEditProfile } from '../hooks/useEditProfile';

import Sidebar from '../components/Sidebar.jsx';
import Searchbar from '../components/Searchbar.jsx';

export default function EditProfile() {

  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState(user && user.firstName);
  const [lastName, setLastName] = useState(user && user.lastName);
  const [bio, setBio] = useState(user && user.bio);
  const [country, setCountry] = useState(user && user.country);
  const [city, setCity] = useState(user && user.city);
  const [facebook, setFacebook] = useState(user && user.facebook);
  const [linkedin, setLinkedin] = useState(user && user.linkedin);

  const {edit, error, isLoading} = useEditProfile()

  const [image, setImage] = useState(user && user.image && user.image.url);

  //handle and convert it in base 64
  const handleImage = (e) =>{
      const file = e.target.files[0];
      setFileToBase(file);
  }

  const setFileToBase = (file) =>{
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () =>{
          setImage(reader.result);
      }

  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    await console.log(user.email, firstName, lastName, bio, country, city, facebook, linkedin, image);
    await edit(user.email, firstName, lastName, bio, country, city, facebook, linkedin, image);

    navigate(-1);


  }

  return (
  <>
  { user && 

  <div className="sm:ml-64">

  <Sidebar />
  <Searchbar />

  <form className="w-full" onSubmit={handleSubmit}>
  <div className="flex justify-center py-4">

    {/* left side */}
    <div className="">

    <div className="flex mb-5 justify-between items-center">
    
      <h2 className="text-4xl font-semibold">Edit Profile</h2>

      {/* Edit Image */}
      <label className="text-center w-28 h-28 relative group hover:cursor-pointer" htmlFor="fileField">
        <img className="w-28 h-28 rounded-full shadow-xl absolute duration-300 z-0 group-hover:opacity-50 border-2" src={image} />
        <div className="flex-col flex rounded-full opacity-0  duration-300 justify-center w-28 h-28 items-center absolute group-hover:opacity-100 group-hover:bg-slate-600/50 text-white pb-2">
          <svg className="w-10 h-10" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
          </svg>
          <p className="text-semibold text-lg">Edit Image</p>
        </div>

        {/* mini edit image icon */}
        <div className="rounded-full w-7 h-7 border-2 bg-gray-300 bottom-0 right-0 absolute flex justify-center items-center">
          <svg className="w-3 h-3 " fill="currentcolor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M149.1 64.8L138.7 96H64C28.7 96 0 124.7 0 160V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H373.3L362.9 64.8C356.4 45.2 338.1 32 317.4 32H194.6c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"/>
          </svg>
        </div>
      </label>
    
      <input onChange={handleImage} className="hidden" type="file" id="fileField" name="file" accept="image/*"></input>
    
    </div>

    {/* Name */}
    <div className="flex justify-between mb-5">
      <div className="w-6/12 pr-5">
        <label className="block text-lg" htmlFor="first-name">First Name</label>
        <input type="text" name="first-name" id="first-name"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          required
          className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" placeholder={`${user.firstName}`} />
      </div>
      <div className="w-6/12 pl-5">
        <label className="block text-lg" htmlFor="last-name">Last Name</label>
        <input type="text" name="last-name" id="last-name"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          required
          className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" placeholder={`${user.lastName}`} />
      </div>
    </div>

    <div className="w-full mb-5">
      <label className="block text-lg" htmlFor="bio">Bio</label>
      <input 
        onChange={(e) => setBio(e.target.value)}
        value={bio}
        className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="bio" id="bio" placeholder="Put Something interesting..." />
    </div>
    
    {/* Country and State */}
    <div className="flex justify-between mb-5">
      <div className="w-6/12 pr-5">
        <label className="block text-lg" htmlFor="country">Country</label>
        <input 
          onChange={(e) => setCountry(e.target.value)}
          value={country}
          className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="country" id="country" placeholder="Country" />
      </div>
      <div className="w-6/12 pl-5">
        <label className="block text-lg" htmlFor="city">City</label>
        <input 
          onChange={(e) => setCity(e.target.value)}
          value={city}
          className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="region" id="region" placeholder="City" />
      </div>
    </div>

    {/* Country and State */}
    <div className="flex justify-between mb-5">
      <div className="w-6/12 pr-5">
        <label className="block text-lg" htmlFor="country">Facebook</label>
        <input 
          onChange={(e) => setFacebook(e.target.value)}
          value={facebook}
          className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="facebook" id="facebook" placeholder="facebook link" />
      </div>
      <div className="w-6/12 pl-5">
        <label className="block text-lg" htmlFor="city">Linkedin</label>
        <input 
          onChange={(e) => setLinkedin(e.target.value)}
          value={linkedin}
          className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="linkedin" id="linkedin" placeholder="linkedin link" />
      </div>
    </div>

    {/* Buttons */}
    <div className="flex justify-center">
      <Link to={`/users/${user.id}`} className="border-2 text-semibold border-green-600 text-green-600 text-2xl bg-white py-2 px-8 rounded-lg shadow mr-10 duration-200 hover:text-white hover:bg-green-600" type="button">Cancel</Link>
      <button to={`/users/${user.id}`} className="border-2 text-semibold border-green-600 text-white text-2xl bg-green-600 py-2 px-4 rounded-lg shadow duration-200 hover:text-green-600 hover:bg-white" type="submit">Save Profile</button>
    </div>
      { error && <div className="pt-4 text-red-600 w-full">*{error}</div>}

    </div>

  </div>
  </form>
  </div>

  }
  </>
  )
}