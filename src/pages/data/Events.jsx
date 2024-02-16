import { Link } from 'react-router-dom'
import MiniPost from '../../components/post/MiniPost.jsx'
import Searchbar from '../../components/Searchbar.jsx'
import Sidebar from '../../components/Sidebar.jsx'

export default function Events() {
  return (
  <>

  <Sidebar />
  <Searchbar />

  <div className="sm:ml-64">
    <MiniPost id="002" name="Jeff Kim" position="Program Manager" title="Empower Innovation: Apply to DLSU MSC!" 
    days="7" tag1="Microsoft Student Community" tag2="Recruitment" tag3="Event" content="Get ready to unleash your creativity with DLSU Microsoft Student Community! From coding workshops to AI hackathons, we're here to help you harness the power of Microsoft technologies and bring your ideas to life. Applications are open for aspiring tech enthusiasts who want to dive into the world of innovation. Join us and let's build the future together, one line of code at a time!" 
    likes="11" dislikes="0" comments="1" />

    <MiniPost id="004" name="Aiden Nguyen" position="Android Development Lead" title="Create with Google: Apply Now!" 
    days="8" tag1="Google Developer Student Club" tag2="Recruitment" tag3="Event" content="Calling all future developers, innovators, and problem solvers! DLSU Google Developer's Student Club is your gateway to the world of Google technologies and beyond. Whether you're passionate about Android apps, machine learning, or web development, we've got something for you. Applications are now open for students ready to explore, learn, and create with Google. Join us and let's code the future together!" 
    likes="15" dislikes="0" comments="1" />
  </div>

  </>
  )
}