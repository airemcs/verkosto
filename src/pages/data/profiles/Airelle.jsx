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

    <div className="flex justify-center mt-2">
      <MiniPost id="006" name="Airelle Maagma" position="President" title="Join Our Data Science Community!" 
      days="7" content="Are you passionate about leveraging data to drive innovation and solve complex challenges? Look no further! The Data Science Community is seeking talented individuals like you to join our dynamic team.    "
      likes="24" dislikes="0" comments="2" tag1="Microsoft Student Community" tag2="Recruitment" tag3="Limited Time" />
    </div>

    </div>
    </>
  )
}