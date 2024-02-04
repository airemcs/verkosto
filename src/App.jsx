import Login from './pages/Login.jsx'
import NavbarRegistered from './components/NavbarRegistered.jsx'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Signup from './pages/Signup.jsx'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/navbar-reg" element={<NavbarRegistered />} />
      </Routes>
    </>
  )
}