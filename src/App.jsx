import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

import ExtendedPost from './components/post/ExtendedPost.jsx'
import MiniPost from './components/post/MiniPost.jsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MiniPost />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </>
  )
}