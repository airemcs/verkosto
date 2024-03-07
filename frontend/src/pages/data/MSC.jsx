import { Link } from 'react-router-dom'
import MiniPost from '../../components/post/MiniPost.jsx'
import Searchbar from '../../components/Searchbar.jsx'
import Sidebar from '../../components/Sidebar.jsx'

export default function MSC() {
  return (
  <>

  <Sidebar />
  <Searchbar />

  <div className="sm:ml-64">
    <MiniPost id="002" name="Jeff Kim" position="Program Manager" title="Empower Innovation: Apply to DLSU MSC!" 
    days="7" tag1="Microsoft Student Community" tag2="Recruitment" tag3="Event" content="Get ready to unleash your creativity with DLSU Microsoft Student Community! From coding workshops to AI hackathons, we're here to help you harness the power of Microsoft technologies and bring your ideas to life. Applications are open for aspiring tech enthusiasts who want to dive into the world of innovation. Join us and let's build the future together, one line of code at a time!" 
    likes="11" dislikes="0" comments="1" />
    <MiniPost id="006" name="Airelle Maagma" position="President" title="Join Our Data Science Community!" 
    days="7" content="Are you passionate about leveraging data to drive innovation and solve complex challenges? Look no further! The Data Science Community is seeking talented individuals like you to join our dynamic team.    "
    likes="24" dislikes="0" comments="2" tag1="Microsoft Student Community" tag2="Recruitment" tag3="Limited Time" />
  </div>

  </>
  )
}