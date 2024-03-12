import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

import Profile from '../components/Profile.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Searchbar from '../components/Searchbar.jsx'
import MiniPost from '../components/post/MiniPost.jsx'

export default function Account() {

  const { id } = useParams();
  const [user, setUser] = useState({});
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDataResponse = await axios.get(`http://localhost:5555/users/${id}`);
        setUser(userDataResponse.data);
        setDataLoaded(true);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <>
    <div className="sm:ml-64">

    <Sidebar />
    <Searchbar />

    { dataLoaded && (
      <Profile id={user._id} positionID={user.positionID} name={user.firstName + ` ` + user.lastName} bio={user.bio} org={user.organizationIDs} banner="water" 
      location={user.city + `, ` + user.country} facebook={`/` + user.facebook} linkedin={`/` + user.linkedin} />
    )}
    
    {/* { user.map((users, index) => (
      <div key={post._id}>
        <h1>Hello</h1>
      </div>
    ))} */}

    </div>
    </>
  )
}