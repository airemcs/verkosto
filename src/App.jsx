import Login from './pages/Login.jsx'
import NavbarRegistered from './components/Searchbar.jsx'
import Navbar from './components/Navbar.jsx'
import ExtendedPost from './components/ExtendedPost.jsx'
import Signup from './pages/Signup.jsx'
import MiniPost from './components/MiniPost.jsx'
import CreatePost from './components/CreatePost.jsx'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/sidebar" element={<ExtendedPost />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Searchbar />} />
        <Route path="/mini-post" element={<MiniPost />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </>
  )
}