import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const apiURL = import.meta.env.VITE_BACKEND_URL

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
        const userData = await axios.get(apiURL + `users/${id}`);
        setUser(userData.data);
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
    <Profile  id={user._id} 
              positionID={user.positionID} 
              name={user.firstName + ` ` + user.lastName} 
              bio={user.bio} 
              org={user.organizationIDs} 
              banner="water"
              city={user.city}
              country={user.country} 
              facebook={user.facebook && `/` + user.facebook} 
              linkedin={user.linkedin && `/` + user.linkedin} 
              image={user.image.url}
              />
  )}

  {dataLoaded && user.postIDs.map((post, index) => (
    <MiniPost key={user.postIDs[index]} id={user.postIDs[index]} />
  ))}

  </div>
  </>
  )
}