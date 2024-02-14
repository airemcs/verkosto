import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Sidebar from './components/Sidebar.jsx'
import Signup from './pages/Signup.jsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sidebar />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  )
}