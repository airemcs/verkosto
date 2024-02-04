import NavbarRegistered from './components/NavbarRegistered.jsx'
import Navbar from './components/Navbar.jsx'
import Sidebar from './components/Sidebar.jsx'
import Signup from './pages/Signup.jsx'
import { Route, Routes } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      {/* <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/navbar-reg" element={<NavbarRegistered />} />
      </Routes> */}
    </>
  )
}