import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import ExtendedPostPage from './pages/ExtendedPost-Page.jsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/extendedpost" element={<ExtendedPostPage />} />
      </Routes>
    </>
  )
}