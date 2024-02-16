import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'
import Searchbar from '../components/Searchbar.jsx'

export default function EditProfile() {
  return (
  <>
  <div className="sm:ml-64">

  <Sidebar />
  <Searchbar />

  <form className="w-full">
  <div className="flex justify-center py-4">

    {/* left side */}
    <div className="">

    <div className="flex mb-5 justify-between items-center">
    
      <h2 className="text-4xl font-semibold">Edit Profile</h2>

      {/* Edit Image */}
      <label className="text-center w-28 h-28 relative group hover:cursor-pointer" for="fileField">
        <img className="w-28 h-28 rounded-full shadow-xl absolute duration-300 z-0 group-hover:opacity-50 border-2" src="src/assets/airelle.jpg" />
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
    
      <input className="hidden" type="file" id="fileField" name="file" accept="image/*"></input>
    
    </div>

    {/* Name */}
    <div className="flex justify-between mb-5">
      <div className="w-6/12 pr-5">
        <label className="block text-lg" for="first-name">First Name</label>
        <input className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="first-name" id="first-name" placeholder="Airelle" />
      </div>
      <div className="w-6/12 pl-5">
        <label className="block text-lg" for="last-name">Last Name</label>
        <input className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="last-name" id="last-name" placeholder="Maagma" />
      </div>
    </div>

    <div className="w-full mb-5">
      <label className="block text-lg" for="username">Bio</label>
      <input className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="username" id="username" placeholder="President at DLSU Microsoft Student Community" />
    </div>
    
    {/* Country and State */}
    <div className="flex justify-between mb-5">
      <div className="w-6/12 pr-5">
        <label className="block text-lg" for="country">Country</label>
        <input className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="country" id="country" placeholder="Philippines" />
      </div>
      <div className="w-6/12 pl-5">
        <label className="block text-lg" for="city">City</label>
        <input className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="region" id="region" placeholder="Las Pinas City" />
      </div>
    </div>

    {/* Country and State */}
    <div className="flex justify-between mb-5">
      <div className="w-6/12 pr-5">
        <label className="block text-lg" for="country">Facebook</label>
        <input className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="country" id="country" placeholder="airelleloumel" />
      </div>
      <div className="w-6/12 pl-5">
        <label className="block text-lg" for="city">Linkedin</label>
        <input className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="region" id="region" placeholder="airellemaagma" />
      </div>
    </div>


    <div className="w-full mb-5">
      <label className="block text-lg" for="password">Password</label>
      <input className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="password" id="password" placeholder="Password" />
    </div>

    <div className="w-full mb-8">
      <label className="block text-lg" for="confirm-password">Confirm Password</label>
      <input className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="confirm-password" id="confirm-password" placeholder="Confirm Password" />
    </div>

    {/* Buttons */}
    <div className="flex justify-center">
      <Link to="/user/airelle" className="border-2 text-semibold border-green-600 text-green-600 text-2xl bg-white py-2 px-8 rounded-lg shadow mr-10 duration-200 hover:text-white hover:bg-green-600" type="submit">Cancel</Link>
      <Link to="/user/airelle" className="border-2 text-semibold border-green-600 text-white text-2xl bg-green-600 py-2 px-4 rounded-lg shadow duration-200 hover:text-green-600 hover:bg-white" type="submit">Save Profile</Link>
    </div>

    </div>

  </div>
  </form>
  </div>
  </>
  )
}