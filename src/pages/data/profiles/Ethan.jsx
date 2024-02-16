import { Link } from 'react-router-dom'
import Profile from '../../../components/Profile.jsx'
import Sidebar from '../../../components/Sidebar.jsx'
import Searchbar from '../../../components/Searchbar.jsx'

import MiniPost from '../../../components/post/MiniPost.jsx'

export default function Ethan() {
  return (
    <>
    <div className="sm:ml-64">

    <Sidebar />
    <Searchbar />
    <Profile name="Ethan Johnson" bio="Vice President @ LSCS" org="La Salle Computer Society" banner="sand"
    location="Makati City, Philippines" facebook="/ethans" linkedin="ethans" />

    <div className="flex justify-center mt-2">
      <MiniPost id="001" name="Ethan Johnson" position="Vice President" title="Code Your Future: Applications Now Open!" 
      days="2" content="Are you passionate about technology and eager to make an impact? Look no further! La Salle Computer Society is calling all aspiring developers, designers, and tech enthusiasts to join our vibrant community. As a member, you'll gain access to exclusive workshops, hackathons, and networking events, where you can sharpen your skills and collaborate on exciting projects. Whether you're a seasoned coder or just getting started, there's a place for you here! Our society is dedicated to fostering innovation, creativity, and collaboration among students who share a common interest in technology. From coding competitions to guest speaker series, we offer a wide range of opportunities for members to expand their knowledge, build their portfolios, and connect with industry professionals. Whether you're passionate about web development, data science, or artificial intelligence, you'll find like-minded peers and mentors to support you every step of the way. In addition to technical skills, La Salle Computer Society places a strong emphasis on personal and professional development. Through leadership workshops, resume building sessions, and mentorship programs, we empower our members to become well-rounded individuals poised for success in their careers. Our alumni network spans across various industries, providing invaluable insights and opportunities for current members to explore. Ready to take the next step in your tech journey? Complete our registration form now to unlock a world of opportunities. Join La Salle Computer Society and let's shape the future of technology together!"
      likes="18" dislikes="0" comments="2" tag1="La Salle Computer Society" tag2="Recruitment" tag3="Limited Time" />
    </div>

    </div>
    </>
  )
}