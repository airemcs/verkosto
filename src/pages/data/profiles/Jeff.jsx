import { Link } from 'react-router-dom'
import Profile from '../../../components/Profile.jsx'
import Sidebar from '../../../components/Sidebar.jsx'
import Searchbar from '../../../components/Searchbar.jsx'

import MiniPost from '../../../components/post/MiniPost.jsx'

export default function Jeff() {
  return (
    <>
    <div className="sm:ml-64">

    <Sidebar />
    <Searchbar />
    <Profile name="Jeff Kim" bio="Program Manager @ MSC" org="Microsoft Student Community" banner="sunset"
    location="Makati City, Philippines" facebook="/jeffk" linkedin="jeffk" />

    <div className="flex justify-center mt-2">
      <MiniPost id="002" name="Jeff Kim" position="Program Manager" title="Empower Innovation: Apply to DLSU MSC!" 
      days="7" tag1="Microsoft Student Community" tag2="Recruitment" tag3="Event" content="Get ready to unleash your creativity with DLSU Microsoft Student Community! From coding workshops to AI hackathons, we're here to help you harness the power of Microsoft technologies and bring your ideas to life. Applications are open for aspiring tech enthusiasts who want to dive into the world of innovation. Join us and let's build the future together, one line of code at a time!" 
      likes="11" dislikes="0" comments="1" />
    </div>

    </div>
    </>
  )
}