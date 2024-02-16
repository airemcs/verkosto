import { Link } from 'react-router-dom'
import Profile from '../../../components/Profile.jsx'
import Sidebar from '../../../components/Sidebar.jsx'
import Searchbar from '../../../components/Searchbar.jsx'

import MiniPost from '../../../components/post/MiniPost.jsx'

export default function Dylan() {
  return (
    <>
    <div className="sm:ml-64">

    <Sidebar />
    <Searchbar />
    <Profile name="Dylan Taylor" bio="Research Assistant @ CCS" org="Computer Studies Government" banner="shore"
    location="Quezon City, Philippines" facebook="/dyls" linkedin="dyls" />

    <div className="flex justify-center mt-2">
      <MiniPost id="003" name="Dylan Taylor" position="Research Assistant" title="Shape the Future: Apply to CCS Today!" 
      days="14" tag1="College of Computer Studies" tag2="Recruitment" tag3="Excellence" content="Dreaming of a career in tech? Make it a reality with the College of Computer Studies at DLSU! Our cutting-edge programs and world-class faculty provide the perfect environment for aspiring computer scientists and engineers to thrive. Applications are open for students eager to explore the endless possibilities of technology and innovation. Join us and let's shape the future of computing together!" 
      likes="301" dislikes="1" comments="0" />
    </div>

    </div>
    </>
  )
}