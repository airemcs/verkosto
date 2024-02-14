import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'

export default function EditProfile() {
  return (
    <div className="flex h-screen">
      <div className="bg-slate-400 w-64 h-screen">
        <Sidebar />
      </div>
      <form className="w-full">

        <div className="flex-1 flex h-full">
          {/* left side */}
          <div className="w-3/5 border-r flex flex-col py-6 px-20">
            <div className="flex mb-5 justify-between items-center">
              <h2 className="text-4xl font-semibold">Edit Profile</h2>
              <img className="w-20 h-20 rounded-full shadow" src="src/assets/profile.jpg" />
            </div>

            {/* Name */}
            <div className="flex justify-between mb-5">
              <div className="w-6/12 pr-5">
                <label className="block text-lg" for="first-name">First Name</label>
                <input className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="first-name" id="first-name" placeholder="John" />
              </div>
              <div className="w-6/12 pl-5">
                <label className="block text-lg" for="last-name">Last Name</label>
                <input className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="last-name" id="last-name" placeholder="Michael" />
              </div>
            </div>

            <div className="w-full mb-5">
              <label className="block text-lg" for="username">Username</label>
              <input className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="username" id="username" placeholder="Username" />
            </div>
            
            {/* Adress */}
            <div className="w-full mb-5">
              <label className="block text-lg" for="address-line-1">Address Line 1</label>
              <input className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="address-line-1" id="address-line-1" placeholder="Address Line 1" />
            </div>

            <div className="w-full mb-5">
              <label className="block text-lg" for="address-line-2">Address Line 2</label>
              <input className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="address-line-2" id="address-line-2" placeholder="Address Line 2" />
            </div>

            {/* Country and State */}
            <div className="flex justify-between mb-5">
              <div className="w-6/12 pr-5">
                <label className="block text-lg" for="country">Country</label>
                <input className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="country" id="country" placeholder="Country" />
              </div>
              <div className="w-6/12 pl-5">
                <label className="block text-lg" for="region">State/Region</label>
                <input className="rounded-lg w-full text-xl pt-2 pb-3 pl-4 border border-gray-300 shadow" type="text" name="region" id="region" placeholder="State/Region" />
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
              <button className="border-2 text-semibold border-green-600 text-green-600 text-2xl bg-white py-2 px-8 rounded-lg shadow mr-10 hover:text-white hover:bg-green-600" type="submit">Cancel</button>
              <button className="border-2 text-semibold border-green-600 text-white text-2xl bg-green-600 py-2 px-4 rounded-lg shadow hover:text-green-600 hover:bg-white" type="submit">Save Profile</button>

            </div>
          </div>
        </div>
      </form>



    </div>
  )
}