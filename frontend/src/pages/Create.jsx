import { Link } from 'react-router-dom'
import CreatePost from '../components/post/CreatePost.jsx'
import Searchbar from '../components/Searchbar.jsx'
import Sidebar from '../components/Sidebar.jsx'

export default function Create() {
  return (
  <>

  <Sidebar />
  {/* <Searchbar /> */}
  <CreatePost />
  
  </>
  )
}