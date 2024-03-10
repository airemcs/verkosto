import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

import Profile from '../components/Profile.jsx'
import Sidebar from '../components/Sidebar.jsx'
import Searchbar from '../components/Searchbar.jsx'
import MiniPost from '../components/post/MiniPost.jsx'

export default function Account() {

  const [user, setUser] = useState({});
  const [organization, setOrganization] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
      
    axios
    .get(`http://localhost:5555/communities/${user.organizationIDs}`)
    .then((res) => {
      setOrganization(res.data);
      setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
  }, []);

  // TODO: If the organization ID is undefined, we should still be able to use the Profile component with a missing "org" parameter.
  if (organization.title === undefined) {
    organization.title = "Investors' Society";
  };

  return (
    <>
    <div className="sm:ml-64">

    <Sidebar />
    <Searchbar />
    
    <Profile id={user._id} name={user.firstName + ` ` + user.lastName} bio={user.bio} org={organization.title} banner="water" 
    location={user.city + `, ` + user.country} facebook={`/` + user.facebook} linkedin={`/` + user.linkedin} />

    </div>
    </>
  )
}