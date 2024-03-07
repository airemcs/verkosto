import { Link } from 'react-router-dom'
import Profile from '../../../components/Profile.jsx'
import Sidebar from '../../../components/Sidebar.jsx'
import Searchbar from '../../../components/Searchbar.jsx'

import MiniPost from '../../../components/post/MiniPost.jsx'

export default function Isabella() {
  return (
    <>
    <div className="sm:ml-64">

    <Sidebar />
    <Searchbar />
    <Profile name="Isabella Lopez" bio="Computer Science Student" org="La Salle Computer Society" banner="sand"
    location="Makati City, Philippines" facebook="/isa" linkedin="isa" />

    <div className="flex justify-center mt-4">
      <Link class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
          <h5 class="text-2xl font-bold tracking-tight text-gray-900">She has no posts yet..</h5>
        </Link>
    </div>

    </div>
    </>
  )
}