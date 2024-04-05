import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';
const apiURL = import.meta.env.VITE_BACKEND_URL

import MiniPost from '../components/post/MiniPost.jsx'
import Searchbar from '../components/Searchbar.jsx'
import Sidebar from '../components/Sidebar.jsx'

export default function HomeOrganization() {

  const { id } = useParams();
  const [postsData, setPostsData] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiURL + 'posts/', {params: { search: searchQuery}});
        const posts = response.data.data;

        const postsWithOrgID = await Promise.all(
          posts.map(async post => {
            const userResponse = await axios.get(apiURL + `users/${post.userID}`);
            const user = userResponse.data;
            return {
              _id: post._id,
              userID: post.userID,
              organizationID: user.organizationIDs
            };
          })
        );
        
        setDataLoaded(true);
        setPostsData(postsWithOrgID);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [searchQuery, postsData]);


  return (
  <>

  <Sidebar />
  <Searchbar setSearchQuery={setSearchQuery} />
  <div className="sm:ml-64">

  {dataLoaded && postsData.map((post, index) => (
    <div key={post._id}>

    { post.organizationID === id ? (
      <MiniPost id={post._id} />
    ) : null }

    </div>
  ))}

  </div>

  </>
  )
}