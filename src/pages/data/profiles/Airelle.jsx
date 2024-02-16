import { Link } from 'react-router-dom'
import Profile from '../../../components/Profile.jsx'
import Sidebar from '../../../components/Sidebar.jsx'
import Searchbar from '../../../components/Searchbar.jsx'

import MiniPost from '../../../components/post/MiniPost.jsx'

export default function Airelle() {
  return (
    <>
    <div className="sm:ml-64">

    <Sidebar />
    <Searchbar />
    <Profile name="Airelle Maagma" bio="President at DLSU Microsoft Student Community" org="Microsoft Student Community" banner="city"
    location="Las Pinas City, Philippines" facebook="/airelleloumel" linkedin="airellemaagma" isAccount = "1" />

    <div className="flex justify-center mt-12">
      <Link to="/create" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">You have no posts yet..</h5>
        <p class="font-normal text-gray-700">You can click me to make your first one!</p>
      </Link>
    </div>

    </div>
    </>
  )
}