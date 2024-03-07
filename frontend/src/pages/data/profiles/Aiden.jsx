import { Link } from 'react-router-dom'
import Profile from '../../../components/Profile.jsx'
import Sidebar from '../../../components/Sidebar.jsx'
import Searchbar from '../../../components/Searchbar.jsx'

import MiniPost from '../../../components/post/MiniPost.jsx'

export default function Aiden() {
  return (
    <>
    <div className="sm:ml-64">

    <Sidebar />
    <Searchbar />
    <Profile name="Aiden Nguyen" bio="Android Development Lead @ GDSC" org="Google Developer Student Club" banner="water"
    location="Taguig City, Philippines" facebook="/aidengu" linkedin="aidengu" />

    <div className="flex justify-center mt-2">
      <MiniPost id="004" name="Aiden Nguyen" position="Android Development Lead" title="Create with Google: Apply Now!" 
      days="8" tag1="Google Developer Student Club" tag2="Recruitment" tag3="Event" content="Calling all future developers, innovators, and problem solvers! DLSU Google Developer's Student Club is your gateway to the world of Google technologies and beyond. Whether you're passionate about Android apps, machine learning, or web development, we've got something for you. Applications are now open for students ready to explore, learn, and create with Google. Join us and let's code the future together!" 
      likes="15" dislikes="0" comments="1" />
    </div>

    </div>
    </>
  )
}