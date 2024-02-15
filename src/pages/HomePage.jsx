import { Link } from 'react-router-dom'
import MiniPost from '../components/post/MiniPost.jsx'
import Searchbar from '../components/Searchbar.jsx'
import Sidebar from '../components/Sidebar.jsx'

export default function HomePage() {
  return (
  <>

  <Sidebar />
  <Searchbar />

  <div className="sm:ml-64">
    <MiniPost />
    <MiniPost />
    <MiniPost />
    <MiniPost />
    <MiniPost />
  </div>

  </>
  )
}