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
    <Profile name="Olivia Martinez" bio="Investment Analyst @ IS" org="Investors' Society" banner="sunset"
    location="Makati City, Philippines" facebook="/olive" linkedin="olive" />

    <div className="flex justify-center mt-2">
      <MiniPost id="005" name="Olivia Martinez" position="Investment Analyst" title="Invest in Your Future: Apply Today!" 
      days="4" tag1="Investors' Society" tag2="Recruitment" tag3="Financial Independency" content="Invest in your future with DLSU Investors' Society! Whether you're a seasoned trader or just starting to explore the world of finance, we've got the resources and support you need to succeed. Applications are now open for students eager to learn, grow, and make smart investment decisions. Join us and embark on a journey to financial literacy and prosperity!" 
      likes="127" dislikes="2" comments="4" />
    </div>

    </div>
    </>
  )
}