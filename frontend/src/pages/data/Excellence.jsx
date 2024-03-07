import { Link } from 'react-router-dom'
import MiniPost from '../../components/post/MiniPost.jsx'
import Searchbar from '../../components/Searchbar.jsx'
import Sidebar from '../../components/Sidebar.jsx'

export default function Excellence() {
  return (
  <>

  <Sidebar />
  <Searchbar />

  <div className="sm:ml-64">
    <MiniPost id="003" name="Dylan Taylor" position="Research Assistant" title="Shape the Future: Apply to CCS Today!" 
    days="14" tag1="College of Computer Studies" tag2="Recruitment" tag3="Excellence" content="Dreaming of a career in tech? Make it a reality with the College of Computer Studies at DLSU! Our cutting-edge programs and world-class faculty provide the perfect environment for aspiring computer scientists and engineers to thrive. Applications are open for students eager to explore the endless possibilities of technology and innovation. Join us and let's shape the future of computing together!" 
    likes="301" dislikes="1" comments="0" />
</div>

  </>
  )
}