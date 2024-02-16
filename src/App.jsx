import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'

import ExtendedPostLSCS from './pages/data/ExtendedPostLSCS.jsx'
import ExtendedPostMSC from './pages/data/ExtendedPostMSC.jsx'
import ExtendedPostCSG from './pages/data/ExtendedPostCSG.jsx'
import ExtendedPostGDSC from './pages/data/ExtendedPostGDSC.jsx'
import ExtendedPostIS from './pages/data/ExtendedPostIS.jsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="post/001" element={<ExtendedPostLSCS />} />
        <Route path="post/002" element={<ExtendedPostMSC />} />
        <Route path="post/003" element={<ExtendedPostCSG />} />
        <Route path="post/004" element={<ExtendedPostGDSC />} />
        <Route path="post/005" element={<ExtendedPostIS />} />
      </Routes>
    </>
  )
}