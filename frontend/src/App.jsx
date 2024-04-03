import { Navigate, Route, Routes } from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';
import { MyProvider } from './MyContext.jsx';

import Home from './pages/Home.jsx'
import Recent from './pages/Recent.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import EditProfile from './pages/EditProfile.jsx'
import Create from './pages/Create.jsx'
import Communities from './pages/Communities.jsx'
import ExtendedPostPage from './pages/ExtendedPostPage.jsx'
import ExtendedPostPageEdit from './pages/ExtendedPostPageEdit.jsx';

// import ExtendedPostDSCEdit from './pages/data/ExtendedPostDSCEdit.jsx'
// import ExtendedPostDSCEditComment from './pages/data/ExtendedPostDSCEditComment.jsx'

import Topics from './pages/Topics.jsx'

import Account from './pages/Account.jsx'
import HomeTopics from './pages/HomeTopics.jsx'
import HomeOrganization from './pages/HomeOrganization.jsx'
import { useAuthContext } from './hooks/useAuthContext.jsx';

export default function App() {

  const { user } = useAuthContext();

  return (
    <>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/recent" element={<Recent />} />

        <Route path="/topics" element={<Topics />} />
        <Route path="/topics/:id" element={<HomeTopics />} />

        <Route path="/communities" element={<Communities />} />
        <Route path="/communities/:id" element={<HomeOrganization />} />

        <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
        <Route path="/edit" element={user ? <EditProfile /> : <Navigate to="/" />} />
        <Route path="/create" element={<Create />} />

        {/* <Route path="/user/airelle" element={<Airelle />} /> */}

        {/*  */}
        <Route path="/posts/:id" element={<ExtendedPostPage />} />
        <Route path="/posts/:id/edit" element={<ExtendedPostPageEdit />} />
        {/* <Route path="/edit/:id" element={<EditProfile />} /> */}

        {/* <Route path="edit/006" element={<ExtendedPostDSCEdit />} /> */}
        {/* <Route path="comment/006" element={<ExtendedPostDSCEditComment />} /> */}

        {/*  */}
        <Route path="/users/:id" element={<Account />} />

      </Routes>
      
    </>
  )
}