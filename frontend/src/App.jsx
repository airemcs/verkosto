import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Recent from './pages/Recent.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Airelle from './pages/data/profiles/Airelle.jsx'
import EditProfile from './pages/EditProfile.jsx'
import Create from './pages/Create.jsx'
import Communities from './pages/Communities.jsx'

import ExtendedPostLSCS from './pages/data/ExtendedPostLSCS.jsx'
import ExtendedPostMSC from './pages/data/ExtendedPostMSC.jsx'
import ExtendedPostCSG from './pages/data/ExtendedPostCSG.jsx'
import ExtendedPostGDSC from './pages/data/ExtendedPostGDSC.jsx'
import ExtendedPostIS from './pages/data/ExtendedPostIS.jsx'
import ExtendedPostDSC from './pages/data/ExtendedPostDSC.jsx'
import ExtendedPostDSCEdit from './pages/data/ExtendedPostDSCEdit.jsx'

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

import Aiden from './pages/data/profiles/Aiden.jsx'
import Dylan from './pages/data/profiles/Dylan.jsx'
import Ethan from './pages/data/profiles/Ethan.jsx'
import Isabella from './pages/data/profiles/Isabella.jsx'
import Jeff from './pages/data/profiles/Jeff.jsx'
import Maya from './pages/data/profiles/Maya.jsx'
import Olivia from './pages/data/profiles/Olivia.jsx'
import ExtendedPostDSCEditComment from './pages/data/ExtendedPostDSCEditComment.jsx'

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recent" element={<Recent />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/user/airelle" element={<Airelle />} />
        <Route path="/edit" element={<EditProfile />} />
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
        <Route path="post/006" element={<ExtendedPostDSC />} />
        <Route path="edit/006" element={<ExtendedPostDSCEdit />} />
        <Route path="comment/006" element={<ExtendedPostDSCEditComment />} />

        <Route path="/user/aiden" element={<Aiden />} />
        <Route path="/user/dylan" element={<Dylan />} />
        <Route path="/user/ethan" element={<Ethan />} />
        <Route path="/user/isabella" element={<Isabella />} />
        <Route path="/user/jeff" element={<Jeff />} />
        <Route path="/user/maya" element={<Maya />} />
        <Route path="/user/olivia" element={<Olivia />} />
      </Routes>
    </>
  )
}