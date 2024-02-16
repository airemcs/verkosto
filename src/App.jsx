import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Recent from './pages/Recent.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Create from './pages/Create.jsx'
import Communities from './pages/Communities.jsx'

import ExtendedPostLSCS from './pages/data/ExtendedPostLSCS.jsx'
import ExtendedPostMSC from './pages/data/ExtendedPostMSC.jsx'
import ExtendedPostCSG from './pages/data/ExtendedPostCSG.jsx'
import ExtendedPostGDSC from './pages/data/ExtendedPostGDSC.jsx'
import ExtendedPostIS from './pages/data/ExtendedPostIS.jsx'

import Topics from './pages/Topics.jsx'
import Events from './pages/data/Events.jsx'
import Excellence from './pages/data/Excellence.jsx'
import FinancialIndependency from './pages/data/FinancialIndependency.jsx'
import LimitedTime from './pages/data/LimitedTime.jsx'
import Recruitment from './pages/data/Recruitment.jsx'

import MSC from './pages/data/MSC.jsx'
import GDSC from './pages/data/GDSC.jsx'
import CSG from './pages/data/CSG.jsx'
import IS from './pages/data/IS.jsx'
import LSCS from './pages/data/LSCS.jsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<Create />} />
        
        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/events" element={<Events />} />
        <Route path="/topics/excellence" element={<Excellence />} />
        <Route path="/topics/financial-independence" element={<FinancialIndependency />} />
        <Route path="/topics/limited-time" element={<LimitedTime />} />
        <Route path="/topics/recruitment" element={<Recruitment />} />

        <Route path="/communities" element={<Communities />} />
        <Route path="/communities/msc" element={<MSC />} />
        <Route path="/communities/gdsc" element={<GDSC />} />
        <Route path="/communities/csg" element={<CSG />} />
        <Route path="/communities/is" element={<IS />} />
        <Route path="/communities/lscs" element={<LSCS />} />

        <Route path="post/001" element={<ExtendedPostLSCS />} />
        <Route path="post/002" element={<ExtendedPostMSC />} />
        <Route path="post/003" element={<ExtendedPostCSG />} />
        <Route path="post/004" element={<ExtendedPostGDSC />} />
        <Route path="post/005" element={<ExtendedPostIS />} />
      </Routes>
    </>
  )
}