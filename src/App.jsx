import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Sidebar from './components/Sidebar.jsx'
import PostHeader from './components/ProfileHeader.jsx'
import Signup from './pages/Signup.jsx'
import Profile from './pages/Profile.jsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/ds" element={<Sidebar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/" element={<Profile />} />
      </Routes>
    </>
  )
}